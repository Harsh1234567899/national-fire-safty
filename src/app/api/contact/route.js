import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const body = await request.json();
    const { from_name, from_email, phone, service, message, product_name } = body;

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.SENDER_EMAIL,
        pass: process.env.GOOGLE_SMTP_PASS,
      },
    });

    let subject = "New Inquiry from National Fire Safety Website";
    if (product_name) {
      subject = `Product Inquiry: ${product_name}`;
    } else if (service) {
      subject = `Service Inquiry: ${service}`;
    }

    const htmlContent = `
      <h2>New Inquiry Received</h2>
      <p><strong>Name:</strong> ${from_name}</p>
      <p><strong>Email:</strong> ${from_email || 'Not provided'}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Service/Product:</strong> ${product_name || service || 'General'}</p>
      <br />
      <h3>Message:</h3>
      <p>${message}</p>
    `;

    const mailOptions = {
      from: process.env.SENDER_EMAIL,
      to: process.env.SENDER_EMAIL, // Sending to yourself
      subject: subject,
      html: htmlContent,
      replyTo: from_email || process.env.SENDER_EMAIL,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, message: 'Email sent successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ success: false, error: 'Failed to send email' }, { status: 500 });
  }
}

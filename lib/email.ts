import nodemailer from "nodemailer";

// Create reusable transporter object using SMTP transport
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST || "",
  port: Number.parseInt(process.env.EMAIL_PORT || "587"),
  secure: process.env.EMAIL_SECURE === "true",
  auth: {
    user: process.env.EMAIL_USER || "",
    pass: process.env.EMAIL_PASS || "",
  },
  // Add these options
  connectionTimeout: 10000, // 10 seconds
  greetingTimeout: 10000, // 10 seconds
  socketTimeout: 15000, // 15 seconds
});

/**
 * Send email notification for contact form submission
 * @param {Object} contactData - Contact form data
 * @returns {Promise} - Email sending result
 */
export const sendContactNotification = async (contactData: {
  name: string;
  email: string;
  subject: string;
  message: string;
}) => {
  const { name, email, subject, message } = contactData;

  // Email content
  const mailOptions = {
    from: process.env.EMAIL_FROM || "",
    to: process.env.EMAIL_TO || "",
    subject: `New Contact Form Submission: ${subject}`,
    html: `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Subject:</strong> ${subject}</p>
      <h3>Message:</h3>
      <p>${message}</p>
    `,
    // Add text version for email clients that don't support HTML
    text: `
      New Contact Form Submission
      
      Name: ${name}
      Email: ${email}
      Subject: ${subject}
      
      Message:
      ${message}
    `,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent:", info.messageId);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error("Error sending email:", error);
    throw error;
  }
};

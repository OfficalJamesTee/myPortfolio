import nodemailer from "nodemailer";

// Create reusable transporter object using SMTP transport
const createTransporter = () => {
  const host = process.env.EMAIL_HOST;
  const port = Number.parseInt(process.env.EMAIL_PORT || "587");
  const secure = process.env.EMAIL_SECURE === "true";
  const user = process.env.EMAIL_USER;
  const pass = process.env.EMAIL_PASS;

  // Log configuration (without password)
  console.log(
    `Email configuration: ${host}:${port}, secure: ${secure}, user: ${user}`
  );

  if (!host || !user || !pass) {
    throw new Error(
      "Email configuration is incomplete. Please check environment variables."
    );
  }

  return nodemailer.createTransport({
    host,
    port,
    secure,
    auth: {
      user,
      pass,
    },
    // Add these options for better reliability
    connectionTimeout: 10000, // 10 seconds
    greetingTimeout: 10000, // 10 seconds
    socketTimeout: 15000, // 15 seconds
  });
};

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

  const fromEmail = process.env.EMAIL_FROM;
  const toEmail = process.env.EMAIL_TO;

  if (!fromEmail || !toEmail) {
    throw new Error("EMAIL_FROM or EMAIL_TO environment variables are not set");
  }

  // Email content
  const mailOptions = {
    from: fromEmail,
    to: toEmail,
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
    const transporter = createTransporter();
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent:", info.messageId);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error("Error sending email:", error);
    throw error;
  }
};

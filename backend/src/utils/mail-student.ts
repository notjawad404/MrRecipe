import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();
const transporter = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  port: 465,
  secure: true, // true for 465, false for other ports
  auth: {
    user: process.env.EMAIL_MEDOLOGY,
    pass: process.env.PASS_MEDOLOGY,
  },
});

const sendMail = async (email: string, message:string, subject:string): Promise<void> => {
  const mailOptions = {
    from: process.env.EMAIL_MEDOLOGY,
    to: email,
    subject,
    text: message,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("Email sent successfully!");
  } catch (error) {
    console.error("Error sending email:", error);
  }
};

export default sendMail;

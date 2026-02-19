import nodemailer from "nodemailer";




import jwt from "jsonwebtoken";
import { templete } from "./emailtemplete.js";






export async function sendEmail(email){
  const transporter = nodemailer.createTransport({
    service: "gmail",
    secure: false,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD
    }
  });
  const emailtoken = jwt.sign({ email }, process.env.JWT_SECRET_KEY, { expiresIn: "1h" });
  const info = await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: email,
    subject: "Email Confirmation",
    html: templete(emailtoken) });
    console.log("Email sent: " + info.response);


}
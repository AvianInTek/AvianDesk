// import 'server-only'
// import { User } from '@/types/auth';
// import fs from 'fs';
// import path from 'path';
// import { sendEmail } from './send_mail';
// import dotenv from 'dotenv';

// dotenv.config();

// export async function sendVerificationEmail(name: string, to: string, token: string) {
//   try {
//     const htmlFile = path.join(process.cwd(), './src/assets/template.html');
//     const htmlContent = fs.readFileSync(htmlFile, 'utf8');
//     var html = htmlContent.replace(/{{verify}}/g, `${process.env.BASE_URL}/verify/${token}`);
//     html = html.replace(/{{name}}/g, name);
//     html = html.replace(/{{body}}/g, "Thank you for signing up for SangrahDB Support. To complete your registration and verify your email address, please click on the link below:");
//     html = html.replace(/{{extra}}/g, `<p style="font-size: 15px; line-height: 24px; margin: 16px 0; margin-bottom: 20px; margin-top: 20px; -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; text-align: left;">
//                                           If you did not sign up for this account or believe this email was sent in error, please ignore this message. If you have any questions or need assistance, feel free to contact our support team. We look forward to having you with us!
//                                       </p>`);
//     var emailer = await sendEmail(to, "Verify Your Email Address for SangrahDB Support", html);
//     return emailer;
//   } catch (error) {
//     console.log('Error sending email:', error);
//     return false;
//   }
// }


// export async function sendOPTEmail(name: string, to: string, token: string) {
//   try {
//     const htmlFile = path.join(process.cwd(), './src/assets/template.html');
//     const htmlContent = fs.readFileSync(htmlFile, 'utf8');
//     var html = htmlContent.replace(/{{verify}}/g, `${process.env.BASE_URL}/forgot-password/${token}`);
//     html = html.replace(/{{name}}/g, name);
//     html = html.replace(/{{body}}/g, "Thank you for signing up for SangrahDB Support. To complete your chnage your password and verify your email address, please click on the link below:");
//     html = html.replace(/{{extra}}/g, `<p style="font-size: 15px; line-height: 24px; margin: 16px 0; margin-bottom: 20px; margin-top: 20px; -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; text-align: left;">
//                                           If you did not requested forgot password for this account or believe this email was sent in error, please ignore this message. If you have any questions or need assistance, feel free to contact our support team. We look forward to having you with us!
//                                       </p>`);
//     var emailer = await sendEmail(to, "Verify Your Email Address for SangrahDB Support", html);
//     return emailer;
//   } catch (error) {
//     console.log('Error sending email:', error);
//     return false;
//   }
// }
// // lib/sendEmail.ts
// import nodemailer from 'nodemailer';
// import dotenv from 'dotenv';

// dotenv.config();

// const transporter = nodemailer.createTransport({
//   host: process.env.SMTP_HOST,
//   port: parseInt(process.env.SMTP_PORT || '465', 10),
// //   service: 'gmail',
//   secure: true,
//   auth: {
//     user: process.env.SMTP_USER,
//     pass: process.env.SMTP_PASS,
//   },
// });

// export const sendEmail = async (to: string, subject: string, body: string) => {
//   try {
//     const info = await transporter.sendMail({
//       from: process.env.SMTP_USER,
//       to,
//       envelope: {
//           from: `no-reply ${process.env.SMTP_USER}`,
//           to: `${to}`
//       },
//       subject,
//       html: body,
//     });
//     return true;
//   } catch (error) {
//     console.error('Error sending email:', error);
//     return false;
//   }
// };

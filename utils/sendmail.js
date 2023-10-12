const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'Gmail',
    host: 'smtp.gmail.com',
    port: 587,
    secure: true,
    auth: {
      user: 'bookreviewerproject@gmail.com',
      pass: 'process.env.EMAIL_PASS'
    }
  });

  async function sendEmail(userEmail) { 
    const info = await transporter.sendMail({
    from: 'BookReviewerProject@gmail.com',
    to: userEmail,
    subject: 'Welcome to Book Reviewer!📚🐛',
    text: "Welcome fellow bookworms! We appreciate you joining our Book Review website. Quick search and review each book you read with ease! We are a small group of devs-in-training at the University of New Hampshire's Bootcamp. Please feel free to email us at BookReviewerpPoject@gmail.com with questions, concerns, or ideas!"
   });
  
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
    } else {
      console.log('Email sent:', info.response);
    }
  });
  };

  sendEmail().catch(console.error);

  module.exports = { sendEmail }
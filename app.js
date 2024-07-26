const nodemailer = require("nodemailer");
const path = require("path");

const transporter = nodemailer.createTransport({
  service: 'gmail',
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // Use `true` for port 465, `false` for all other ports
  auth: {
    user: "fullstackdeveloper1504@gmail.com",
    pass: "cejc msyl vnvc qita",
  },
});

const mailOptions ={
  from: {
    name: 'Ishant Nimje 👻',
    address:'ishant.nimje15@gmail.com',
  }, // sender address
  to: ["nimjeishant3@gmail.com"], // list of receivers
  subject: "Send email using nodemailer and gmail ✔", // Subject line
  text: "Hello world?", // plain text body
  html: "<h2>Hello world?</h2>", // html body
  attachments: [
    {
      filename: 'AWS_Certified.pdf',
      path: path.join(__dirname, 'AWS_Certified.pdf')
    },
    {
      filename: 'nodejs_npm.jpg',
      path: path.join(__dirname, 'nodejs_npm.jpg')
    }
  ]
}

const sendMail = async (transporter, mailOptions) => {
  try{
    await transporter.sendMail(mailOptions);
    console.log('Email has been sent!');
  } catch (error) {
    console.error(error);
  }
}

sendMail(transporter, mailOptions);

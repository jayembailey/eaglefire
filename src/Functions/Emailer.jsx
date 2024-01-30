import React from 'react'
import {nodemailer} from 'nodemailer'

// var nodemailer = require('nodemailer');




const Emailer = () => {

  var transport = nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "7bfa1a471b3d50",
      pass: "66894caf0f38a9"
    }
  });
  
  var mailOptions = {
    from: '"Example Team" <from@example.com>',
    to: 'user1@example.com, user2@example.com',
    subject: 'Nice Nodemailer test',
    text: 'Hey there, it’s our first message sent with Nodemailer ',
    html: '<b>Hey there! </b><br> This is our first message sent with Nodemailer<br /><img src="cid:uniq-mailtrap.png" alt="mailtrap" />',
    attachments: [
      {
        filename: 'mailtrap.png',
        path: __dirname + '/mailtrap.png',
        cid: 'uniq-mailtrap.png' 
      }
    ]
  };
  
  async function testMail() {transport.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log('Message sent: %s', info.messageId);
  });}

  return (
    <div>
      <button onClick={testMail()}></button>
    </div>
  )
}

export default Emailer
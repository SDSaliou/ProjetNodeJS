var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'nganediarra6@gmail.com',
    pass: 'diarra13100864ngane1'
  }
});

var mailOptions = {
  from: 'nganediarra6@gmail.com',
  to: 'mamemariamadiarrabousso.ngane@unchk.edu.sn',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});

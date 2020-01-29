const nodemailer = require('nodemailer');
const config = require('../config');
module.exports.transporter = nodemailer.createTransport({
    service: config.EMAILSERVICE,
    auth: {
      user: config.EMAILUSERNAME,
      pass: config.EMAILPASSWORD
    }
  });


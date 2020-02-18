const sgMail = require("@sendgrid/mail");
const sendgridAPIKey =
  "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";

sgMail.setApiKey(sendgridAPIKey);

sgMail.send({
  to: "g.borot@gmail.com",
  from: "g.borot@gmail.com",
  subject: "This is my first email!",
  text: "I hope this email gets to you"
});

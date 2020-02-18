const sgMail = require("@sendgrid/mail");
const sendgridAPIKey = "LOL-i've-been-refused";

sgMail.setApiKey(sendgridAPIKey);

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "g.borot@gmail.com",
    subject: "Thanks for joining in!",
    text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
  });
};

const sendCancelEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "g.borot@gmail.com",
    subjec: "Sorry to see you leaving us",
    text: `Goodbye, ${name}, I hope to see you back sometime soon!`
  });
};

module.exports = {
  sendWelcomeEmail,
  sendCancelEmail
};

const paypal = require("paypal-rest-sdk");

paypal.configure({
  mode: "sandbox",
  client_id: "yuiuyi",
  client_secret: "uyiyui",
});

module.exports = paypal;

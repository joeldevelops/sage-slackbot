// TODO: Instead of writing a test for this file, implement validation logic
// to ensure that configuration values are of the expected type.
const config = {
  botName: process.env.BOT_NAME|| 'sage-bot',
  token: process.env.TOKEN,
  signingSecret: process.env.SECRET,
  apiUrl: process.env.ADVICE_API,
  port: process.env.PORT || 3000
};

module.exports = config;
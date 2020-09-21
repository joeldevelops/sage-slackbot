const config = {
  botName: process.env.BOT_NAME|| 'sage-bot',
  token: process.env.TOKEN,
  signingSecret: process.env.SECRET,
  apiUrl: process.env.ADVICE_API,
  port: process.env.PORT || 3000
};

module.exports = config;
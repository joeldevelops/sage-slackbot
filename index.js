const dotenv = require('dotenv');

dotenv.config();

const axios = require('axios');
const { App: Bot } = require('@slack/bolt');

const config = {
  botName: process.env.BOT_NAME|| 'sage-bot',
  token: process.env.TOKEN,
  signingSecret: process.env.SECRET,
  apiUrl: process.env.ADVICE_API,
  port: process.env.PORT || 3000
};

const sageBot = new Bot({
  token: config.token,
  signingSecret: config.signingSecret
});

const getAdvice = async () => {
  const response = await axios.default.get(config.apiUrl);
  const advice = response.data.slip.advice;

  return `:tea: ${advice} :tea:`;
};

sageBot.command('/advice', async ({ ack, say }) => {
  await ack();

  const advice = await getAdvice();
  await say(advice);
});

(async () => {
  await sageBot.start(config.port);

  console.log(`${config.botName} is running!`);
})();
// 3rd Party
const { App: Bot } = require('@slack/bolt');

// Sage-bot
const config = require('./config');
const { getAdvice } = require('./advice');

const sageBot = new Bot({
  token: config.token,
  signingSecret: config.signingSecret
});

sageBot.command('/advice', async ({ ack, say }) => {
  await ack(); // Respond to slack APIs

  const advice = await getAdvice();
  await say(advice);
});

// TODO: implement better error handling by sending errors to a service like sentry.io
sageBot.error(error => console.error(error));

module.exports = sageBot;
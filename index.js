// 3rd Party
const dotenv = require('dotenv');
dotenv.config();

// Sage-bot
const config = require('./src/config');
const sageBot = require('./src/sageBot');

(async () => {
  await sageBot.start(config.port);

  console.log(`${config.botName} is running!`);
})();
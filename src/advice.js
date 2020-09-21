// 3rd Party
const axios = require('axios');

// Sage-bot
const config = require('./config');

const getAdvice = async () => {
  let advice;
  try {
    const response = await axios.default.get(config.apiUrl);
    advice = `:tea: ${response.data.slip.advice} :tea:`;
  } catch (error) {
    console.error(error);
    advice = 'As a great philosopher once said: "ERROR: COULD NOT GET ADVICE API"';
  }

  return advice;
};

module.exports = {
  getAdvice
};
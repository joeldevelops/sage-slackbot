const axios = require('axios');
jest.mock('axios');

const { getAdvice } = require('../../src/advice');

describe('advice.js', () => {
  describe('getAdvice', () => {
    test('should hit the Advice API and return an advice message', async () => {
      const response = {
        data: {
          slip: {
            advice: 'Hello!'
          }
        }
      };

      axios.default.get.mockImplementationOnce(() => Promise.resolve(response));

      await expect(getAdvice()).resolves.toEqual(`:tea: ${response.data.slip.advice} :tea:`);
    })
  
    test('should catch any errors and return a generic error message to the user', async () => {
      const errorMessage = 'As a great philosopher once said: "ERROR: COULD NOT GET ADVICE API"';

      axios.default.get.mockImplementationOnce(() => Promise.reject(new Error()));

      await expect(getAdvice()).resolves.toEqual(errorMessage);
    });
  });
});
jest.mock('@slack/bolt', () => {
  return {
    App: function() {
      this.command = jest.fn();
      this.error = jest.fn();
      this.start = jest.fn();
    }
  }
});

const sageBot = require('../src/sageBot');
jest.mock('../src/sageBot');

describe('index.js', () => {
  test('should call the .start method on the sageBot object to start the bot', async () => {
    sageBot.start.mockImplementationOnce(() => Promise.resolve());

    require('../index');
    await expect(sageBot.start).toHaveBeenCalled();
  });
});
const jestConfig = require("../jest.config");

global.console = {
  // Ignore console outputs during testing
  log: jest.fn(),
  error: jest.fn()
}
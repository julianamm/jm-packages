module.exports = {
    clearMocks: true,
    cacheDirectory: '.jest-cache',
    coverageReporters: [ 'html', 'text'],
    coveragePathIgnorePatterns: ["/node_modules/"],
    setupFilesAfterEnv: [
      "./test.setup.js"
    ],
    testMatch: [
      "**/__tests__/**/*.[jt]s?(x)",
      "**/?(*.)+(spec|test).[tj]s?(x)",
    ],
  };
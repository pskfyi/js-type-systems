const config = {
  moduleNameMapper: {
    '@/(.*)$': "<rootDir>/src/$1"
  },
  rootDir: '.',
  testEnvironment: "node",
  testMatch: [
    "**/test/**/*.js",
    "**/?(*.)+.(spec|test).js"
  ],
  transform: {
    "^.+\\.js$": "babel-jest",
  }
};

if (process.env.CI) {
  config.collectCoverage = true
  config.coverageDirectory = "coverage"
}

module.exports = config;

module.exports = {
  collectCoverage: true,
  coverageDirectory: "coverage",
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
  },
  verbose: true,
};

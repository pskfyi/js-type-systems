module.exports = {
  moduleNameMapper: {
    '@/(.*)$': "<rootDir>/src/$1"
  },
  rootDir: '.',
  testEnvironment: "node",
  testMatch: [
    "**/test/**/*.spec.js"
  ],
  transform: {
    "^.+\\.js$": "babel-jest",
  },
  collectCoverage: true,
  collectCoverageFrom: [
    "./src/**/*.js",
  ],
  coverageDirectory: "coverage",
  coverageThreshold: {
    global: {
      statements: 100
    }
  }
}

module.exports = {
  plugins: [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    "@semantic-release/changelog",
    '@semantic-release/npm',
    "@semantic-release/github",
    ["@semantic-release/git", {
      assets: ["dist/**/*.{js,css}", "docs", "package.json"],
      message: "chore(repo): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}"
    }]
  ],
  preset: "conventionalcommits"
}
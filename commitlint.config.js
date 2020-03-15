module.exports = {
  extends: ['monorepo'],
  rules: { 
    'scope-enum': [
      2, // throw error
      'always', 
      [
        "repo",
        "github",
        "docs"
      ]
    ]
  }
}
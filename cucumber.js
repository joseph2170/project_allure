module.exports = {
  default: {
    require: ['stepDefinitions/*.js'],
    paths: ['features/*.feature'],
    format: ['progress', 'json:cucumber-report.json'],
    formatOptions: { 
      snippetInterface: 'async-await'
    }
  }
};
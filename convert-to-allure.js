const AllureCucumberjs = require('allure-cucumberjs');
const fs = require('fs');
const path = require('path');

const cucumberJson = JSON.parse(fs.readFileSync('./cucumber-report.json', 'utf-8'));
const allure = new AllureCucumberjs('./allure-results');

allure.process(cucumberJson);

console.log('Cucumber report converted to Allure format');

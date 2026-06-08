const fs = require('fs');
const path = require('path');

// Generate simple UUID
function generateUUID() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    const r = Math.random() * 16 | 0;
    const v = c === 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}

// Read Cucumber JSON
const cucumberReport = JSON.parse(fs.readFileSync('./cucumber-report.json', 'utf-8'));

// Create allure-results directory if it doesn't exist
if (!fs.existsSync('./allure-results')) {
  fs.mkdirSync('./allure-results', { recursive: true });
}

// Convert each feature to Allure format
cucumberReport.forEach((feature) => {
  feature.elements.forEach((scenario) => {
    const testResult = {
      uuid: generateUUID(),
      name: scenario.name,
      fullName: `${feature.name} > ${scenario.name}`,
      status: scenario.steps.every(s => s.result.status === 'passed') ? 'passed' : 'failed',
      stage: 'finished',
      steps: scenario.steps.map((step) => ({
        name: `${step.keyword}${step.name}`,
        status: step.result.status,
        stage: 'finished',
        start: Date.now(),
        stop: Date.now() + 1000,
      })),
      start: Date.now(),
      stop: Date.now() + scenario.steps.length * 1000,
      labels: [
        { name: 'feature', value: feature.name },
        { name: 'thread', value: '1' },
        { name: 'host', value: 'localhost' },
        { name: 'language', value: 'javascript' },
        { name: 'framework', value: 'cucumber' },
      ],
    };

    // Write each test result to a separate JSON file
    const fileName = path.join('./allure-results', `${testResult.uuid}-result.json`);
    fs.writeFileSync(fileName, JSON.stringify(testResult, null, 2));
    console.log(`Created: ${fileName}`);
  });
});

console.log('Conversion complete!');

const { Given, When, Then } = require('@cucumber/cucumber');

Given('user is on the SauceDemo products page', async function () {
  console.log('Products page');
});

When('user selects a product {string}', async function (product) {
  console.log('Selected:', product);
});

When('user clicks on the cart icon', async function () {
  console.log('Cart clicked');
});

Then('user should see the cart page', async function () {
  console.log('Cart page displayed');
});

When('user enters invalid username {string}', async function (username) {
  console.log('Entered invalid username:', username);
});

When('user enters invalid password {string}', async function (password) {
  console.log('Entered invalid password:', password);
});

Then('user should see error message {string}', async function (message) {
  throw new Error(`Expected error message: "${message}" but login succeeded unexpectedly`);
});
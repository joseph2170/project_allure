const { Given, When, Then } = require("@cucumber/cucumber");

Given("user is on login page", function () {
    console.log("logged in successfully");
});

When("user enters valid username", function () {
    console.log("entered username");
});

When("user enters valid password", function () {
    console.log("entered password");
});

When("user clicks login button", function () {
    console.log("clicked login button");
});

Then("user should see success message", function () {
    console.log("verified success message");
});
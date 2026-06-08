Feature: SauceDemo Testing

Scenario: Complete Purchase Flow
  Given user is on the SauceDemo products page
  When user selects a product "Sauce Labs Backpack"
  And user clicks on the cart icon
  Then user should see the cart page

Scenario: Invalid Login Attempt
  Given user is on login page
  When user enters invalid username "invaliduser"
  And user enters invalid password "wrongpass"
  And user clicks login button
  Then user should see error message "Invalid credentials"
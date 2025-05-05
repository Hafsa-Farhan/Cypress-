Project: Cypress E2E Testing for SauceDemo
This project demonstrates end-to-end testing of the SauceDemo application using Cypress. It implements Page Object Model (POM) and custom commands for better structure and reusability.

🔧 Objectives
Create a Cypress testing project.

Automate negative login to validate error handling.

Perform successful login and verify navigation to the home page.

Click on a product and ensure redirection to the product details page.

Use custom commands for repeated actions.

Follow Page Object Model (POM) for all application pages.

📁 Project Structure
e2e/ – Contains the actual test cases.

pages/ – POM files storing selectors and methods for each page.

support/ – Holds custom commands and global test configurations.

cypress.config.js – Main Cypress configuration file.

✅ Test Scenarios
Attempt login with invalid credentials and confirm an error message is shown.

Perform a valid login and confirm user lands on the products (home) page.

Click on a product to ensure the application navigates to the product page.

Reuse steps like login using custom Cypress commands.

🧱 Best Practices Applied
Custom Commands: Used for login and other frequently performed actions.

Page Object Model: Ensures code reusability and maintainability.

Assertions: To validate the visibility of error messages and correct redirections.


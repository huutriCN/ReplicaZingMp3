// eslint-disable-next-line import/no-extraneous-dependencies
import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";

const url = "http://localhost:3000";
Given("I open Home page", () => {
  cy.visit(url);
});
Then("I see toggle button in page", () => {
  cy.findByRole("switch").should("exist");
});

When("I toggle language button", () => {
  cy.findByRole("switch").click();
});

Then(`I should see {string}`, (title) => {
  cy.findByText(title).should("exist");
});

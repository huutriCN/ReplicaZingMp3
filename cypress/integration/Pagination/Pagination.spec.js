// eslint-disable-next-line import/no-extraneous-dependencies
import { Given, And, When, Then } from "cypress-cucumber-preprocessor/steps";
// constants
import keyCode from "../../../constants/KeyCode";

const url = "http://localhost:3000";

Given("I open Home page", () => {
  cy.visit(url);
});

And("I scroll to News", () => {
  cy.get("#news").scrollIntoView({
    easing: "linear",
    duration: 1500,
    offset: { top: 150, left: 0 },
  });
});

And("I hover in News's area", () => {
  cy.get("#news").trigger("mouseover");
});

When("I press KeyUp button", () => {
  cy.get("#news").trigger("keydown", { keyCode: keyCode.PageUp });
});

Then("I should see it move to next page", () => {
  cy.get("#news").find("input").should("have.value", 2);
});

When("I press KeyDown button", () => {
  cy.get("#news").trigger("keydown", { keyCode: keyCode.PageDown });
});

Then("I should see it move to previous page", () => {
  cy.get("#news").find("input").should("have.value", 1);
});

When("I type in input", () => {
  cy.get("#news").find("input").type(1290);
});

Then("I should see value in input", () => {
  cy.get("#news").find("input").should("have.value", 2);
});

When("I press Enter", () => {
  cy.get("#news").trigger("keydown", { keyCode: keyCode.Enter });
});

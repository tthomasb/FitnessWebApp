// Import the cucumber operators we need
import { Before, Given, Then, When } from "@cucumber/cucumber";
import { AppPage } from "../app.po";
import { element, by, protractor, browser } from "protractor";
import { expect } from "chai";

let page: AppPage;
let EC = protractor.ExpectedConditions;

Before(() => {
  page = new AppPage();
});

Given("I am on the login page", async () => {
  // Navigate to login page.
  await page.navigateTo();

  // Wait for input
  const loginInput = element(by.id("nameInput"));
  browser.wait(EC.presenceOf(loginInput), 10000);
  expect(await loginInput.isPresent()).to.be.true;
});

When("I enter my username {string}", async (x: string) => {
  // Enter username
  const loginInput = element(by.id("nameInput"));
  loginInput.sendKeys(x);
  expect(await loginInput.getAttribute('value')).to.equal(x);
});

When("I enter my password {string}", async (x: string) => {
  // Enter password
  const passwordInput = element(by.id("passwordInput"));
  passwordInput.sendKeys(x);
  expect(await passwordInput.getAttribute('value')).to.equal(x);
});

Then("I click OK", async () => {
  // Click OK
  const okButton = element(by.id("okButton"));
  okButton.click();
});

Then("I land on navigation page", async () => {
  // Wait for Site to be loaded
  const title = element(by.id('title'));
  browser.wait(EC.presenceOf(title), 10000);
  expect(await title.isPresent()).to.true;
  expect(await title.getText()).to.equal("Decksterous");
});
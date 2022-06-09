/// <reference types="Cypress" />

import { loginPage } from "../page_objects/loginPage";
import { createGalleryPage } from "../page_objects/createGalleryPage";

let validEmail = "nina@gmail.com";
let validPassword = "test123456";

describe("all galleries page", () => {
  before("login", () => {
    cy.visit("/");
    loginPage.clickLoginBtn();
    cy.url().should("include", "/login");
    loginPage.login(validEmail, validPassword);
    cy.url().should("not.include", "/login");
  });

  it("all galleries with logged in user", () => {
    cy.visit("/");
    cy.url().should("not.include", "/login");
    cy.get(createGalleryPage.createGalleryBtn);
    cy.wait(3000);
  });

  it("all galleries with guest user", () => {
    cy.visit("/");
    cy.url().should("not.include", "/login");
    cy.get(loginPage.loginBtn);
  });
});

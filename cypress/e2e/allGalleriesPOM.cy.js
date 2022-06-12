/// <reference types="Cypress" />

import { loginPage } from "../page_objects/loginPage";
import { createGalleryPage } from "../page_objects/createGalleryPage";
import { allGalleriesPage } from "../page_objects/allGalleriesPage";

let validEmail = "nina@gmail.com";
let validPassword = "test123456";

describe("all galleries page", () => {
  beforeEach("login", () => {
    cy.visit("/");
    cy.url().should("contains", "gallery-app");
    loginPage.clickLoginBtn();
    cy.url().should("include", "/login");
    loginPage.login(validEmail, validPassword);
    cy.url().should("not.include", "/login");
  });

  it("all galleries with logged in user", () => {
    cy.visit("/");
    cy.url().should("not.include", "/login");
    cy.get(createGalleryPage.createGalleryBtn);
    cy.get(loginPage.myGalleriesBtn);
    loginPage.logoutBtn.click();
    cy.url().should("include", "/login");
  });

  // it.skip("all galleries with guest user", () => {
  //   cy.visit("/");
  //   cy.url().should("not.include", "/login");
  //   cy.get(loginPage.loginBtn);
  // });

  it("test pagination", () => {
    allGalleriesPage.singleGallery.should("have.length", 10);
    allGalleriesPage.loadMoreBtn.click();
    allGalleriesPage.singleGallery.should("have.length", 20);
    allGalleriesPage.allGalleries
      .children()
      .first()
      .should("have.class", "cell");
  });

  it("gallery heading", () => {
    cy.get(allGalleriesPage.allGalleriesHeading);
  });

  it("test if galleries have title and author", () => {
    cy.get(allGalleriesPage.galleryTitle);
    cy.get(allGalleriesPage.galleryAuthor);
  });

  it("search term", () => {
    allGalleriesPage.search("asdf");
  });
});

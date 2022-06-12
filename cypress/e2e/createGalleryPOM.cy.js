/// <reference types="Cypress" />

import { createGalleryPage } from "../page_objects/createGalleryPage";
import { loginPage } from "../page_objects/loginPage";
const faker = require("faker");

let validEmail = "nina@gmail.com";
let validPassword = "test123456";
let title = faker.animal.cat();
let desc = faker.lorem.words(10);
let title256 = faker.random.alpha(256);
let desc1001 = faker.random.alpha(1001);
let randomImage = faker.internet.avatar();
let catImage =
  "https://imagesvc.meredithcorp.io/v3/mm/image?q=60&c=sc&rect=0%2C0%2C2000%2C1333&poi=%5B700%2C866%5D&w=2000&h=1333&url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F47%2F2021%2F01%2F14%2Fsad-kitty-974832560-2000.jpg";
let catImage2 =
  "https://images.theconversation.com/files/443350/original/file-20220131-15-1ndq1m6.jpg?ixlib=rb-1.1.0&rect=0%2C0%2C3354%2C2464&q=45&auto=format&w=926&fit=clip";

describe("create gallery", () => {
  beforeEach("login", () => {
    cy.visit("/");
    loginPage.clickLoginBtn();
    cy.url().should("include", "/login");
    loginPage.login(validEmail, validPassword);
    cy.url().should("not.include", "/login");
    createGalleryPage.createGalleryBtn.click();
    cy.url().should("include", "/create");
  });

  it.only("create gallery", () => {
    createGalleryPage.create(title, desc, catImage);
    cy.url().should("not.include", "/create");
  });

  it("create gallery without description", () => {
    createGalleryPage.create(title, " ", catImage);
    cy.url().should("not.include", "/create");
  });

  it("create gallery without title", () => {
    createGalleryPage.create(" ", desc, catImage);
    cy.url().should("include", "/create");
  });

  it("too short title", () => {
    createGalleryPage.create("1", desc, catImage);
    cy.url().should("include", "/create");
  });

  it("create gallery without image", () => {
    createGalleryPage.create(title, desc, " ");
    cy.url().should("include", "/create");
  });

  it("too long title", () => {
    createGalleryPage.create(title256, desc, catImage);
    cy.url().should("include", "/create");
  });

  it("too long desctiprion", () => {
    createGalleryPage.create(title, desc1001, catImage);
    cy.url().should("include", "/create");
  });

  it("wrong image format", () => {
    createGalleryPage.create(title, desc, randomImage);
  });

  it("move image", () => {
    createGalleryPage.moveImage(title, desc, catImage, catImage2);
  });

  it("delete image after adding", () => {
    createGalleryPage.deleteImage(title, desc, catImage, catImage2);
  });
});

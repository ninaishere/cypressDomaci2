/// <reference types="Cypress" />

import { createGalleryPage } from "../page_objects/createGalleryPage";
import { loginPage } from "../page_objects/loginPage";
const faker = require("faker");

let validEmail = "nina@gmail.com";
let validPassword = "test123456";
let title = faker.animal.cat();
let desc = faker.lorem.words(10);
// let title256 = faker.lorem.word(256);                                     ┐
// let desc1001 = faker.lorem.word(1001);                                    |
let randomImage = faker.image.imageUrl(1234, 2345, "cat", true, ".jpg"); //  | ne radi :(
// faker.image.cat()                                                         |
let randomImage2 = faker.internet.avatar(); //                               ┘
let longTitle =
  "Ipsum Dapibus Curabitur Primis Nibh Iaculis Ipsum Nisl Hac Risus Pharetra Nisi Habitasse Ante Curabitur Molestie Vivamus Cursus Sagittis Mauris Lobortis Cubilia Vivamus Laoreet Elementum Eu Etiam Nulla Taciti Iaculis Tristique Pellentesque Euismod Aliquam.";
// faker.random.words(40);
let longParagraph =
  "Nibh Vivamus Duis Est Eget Aenean Rhoncus Quis Leo Nostra Risus Dui Et Ut Magna Dui Aptent Vestibulum Est Enim Conubia Eros Eu Nisi Justo Eget Sagittis Congue Suspendisse Viverra Ante Suspendisse Nisi Euismod Aliquam Condimentum Nulla Taciti A Felis Rutrum Augue Interdum Suscipit Consequat Gravida Urna Felis Proin Euismod Morbi Ipsum Non Platea Eget Ullamcorper Morbi Libero Habitasse Nostra Est Lorem Vehicula Dictum Sociosqu Himenaeos Aliquam Cursus Scelerisque Primis Etiam Cubilia Felis Sodales Viverra Senectus Orci Per Urna Quis Commodo Lobortis Accumsan Porttitor Torquent Class Platea Tortor Ultrices Egestas Vitae Bibendum Semper Egestas Suscipit Orci Quisque Suscipit Blandit Orci Ante Tristique Fusce Cubilia Dictum In Ligula Nisi Imperdiet Himenaeos Praesent Cras Libero Nisl Hendrerit Consequat Semper Potenti Consectetur Tempor Adipiscing Nec Neque Velit Lobortis Phasellus Posuere Pretium Duis Class Pharetra Etiam Venenatis Pharetra Cursus Cras Hac Aliquam Habitant Condimentum Sapie";
// faker.lorem.paragraph(30);
let catImage =
  "https://imagesvc.meredithcorp.io/v3/mm/image?q=60&c=sc&rect=0%2C0%2C2000%2C1333&poi=%5B700%2C866%5D&w=2000&h=1333&url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F47%2F2021%2F01%2F14%2Fsad-kitty-974832560-2000.jpg";

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

  it("create gallery", () => {
    createGalleryPage.create(title, desc, catImage);
  });

  it("create gallery without description", () => {
    createGalleryPage.create(title, " ", catImage);
  });

  it("create gallery without title", () => {
    createGalleryPage.create(" ", desc, catImage);
  });

  it("too short title", () => {
    createGalleryPage.create("1", desc, catImage);
  });

  it("create gallery without image", () => {
    createGalleryPage.create(title, desc, " ");
  });

  it("too long title", () => {
    createGalleryPage.create(longTitle, desc, catImage);
  });

  it("too long desctiprion", () => {
    createGalleryPage.create(title, longParagraph, catImage);
  });

  it.only("wrong image format", () => {
    createGalleryPage.create(title, desc, randomImage);
  });
});

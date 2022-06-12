class CreateGalleryPage {
  get createGalleryBtn() {
    return cy.get(".nav-link").eq(2);
  }

  get titleInput() {
    return cy.get("#title");
  }

  get descriptionInput() {
    return cy.get("#description");
  }

  get imageInput() {
    return cy.get(".input-group > .form-control");
  }

  get imageInput2() {
    return this.galleryInputParent.find("input").eq(3);
  }

  get galleryInputParent() {
    return cy.get(".form-group");
  }

  get submitButtonsParent() {
    return cy.get(".btn-custom");
  }

  get deleteFirstImage() {
    return cy.get("i").eq(0);
  }

  get arrowUp() {
    return this.galleryInputParent.find("button").eq(1);
  }

  get arrowDown() {
    return this.galleryInputParent.find("button").eq(2);
  }

  get deleteImg2Btn() {
    return this.galleryInputParent.find("button").eq(3);
  }

  get addImageBtn() {
    return cy.get(".container button").eq(2);
  }

  get submitBtn() {
    return this.submitButtonsParent.first();
  }

  get cancelBtn() {
    return this.submitButtonsParent.last();
  }

  clickarrowUp() {
    this.arrowUp.click();
  }

  clickarrowDown() {
    this.arrowDown.click();
  }

  clickAddImageBtn() {
    this.addImageBtn.click();
  }

  clickSubmitBtn() {
    this.submitBtn.click();
  }

  clickCancelBtn() {
    this.cancelBtn.click();
  }

  create(title, desc, image) {
    this.titleInput.type(title);
    this.descriptionInput.type(desc);
    this.imageInput.type(image);
    this.clickSubmitBtn();
  }

  moveImage(title, desc, image, image2) {
    this.titleInput.type(title);
    this.descriptionInput.type(desc);
    this.imageInput.type(image);
    this.addImageBtn.click();
    this.imageInput2.type(image2);
    this.clickarrowDown();
    this.clickSubmitBtn();
  }

  deleteImage(title, desc, image, image2) {
    this.titleInput.type(title);
    this.descriptionInput.type(desc);
    this.imageInput.type(image);
    this.addImageBtn.click();
    this.imageInput2.type(image2);
    this.deleteImg2Btn.click();
    this.clickCancelBtn();
  }
}

export const createGalleryPage = new CreateGalleryPage();

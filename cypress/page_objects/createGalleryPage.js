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

  get upInputBtn() {
    return cy.get(".input-buttons:nth-child(1)");
  }

  get downInputBtn() {
    return cy.get(".input-buttons:nth-child(2)");
  }

  get addImageBtn() {
    return cy.get("form > :nth-child(3) > :nth-child(3)");
  }

  get submitBtn() {
    return cy.get("form > :nth-child(4)");
  }

  get cancelBtn() {
    return cy.get("form > :nth-child(5)");
  }

  clickUpInputBtn() {
    this.upInputBtn.click();
  }

  clickDownInputBtn() {
    this.downInputBtn.click();
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
}

export const createGalleryPage = new CreateGalleryPage();

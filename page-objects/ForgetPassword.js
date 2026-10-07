import { expect, Locator, Page } from '@playwright/test';

export class Forgetpassword {

  //forgetYourPasswordLink = Locator
  emailTextBox = Locator
  sendPasswordButton = Locator
  forgettenPasswordHeading = Locator
  
  // Init selectors using constructor
  constructor(page = Page) {
    this.page = page
    this.emailTextBox = page.getByRole('textbox', { name: 'Email' })
    this.sendPasswordButton = page.getByRole('button')
    this.forgettenPasswordHeading = page.getByRole('heading', { name: 'Forgotten Password' })
    
  }

  async enterEmail(emailID = string) {
    await this.emailTextBox.type(emailID)
  }

  async clickOnSendPasswordButton() {
    await this.sendPasswordButton.click()
  }

  
}

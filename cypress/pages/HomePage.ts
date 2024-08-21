import tutorialPageLocators from "../fixtures/homePageLocators.json";
import configStepsPageLocators from "../fixtures/configStepsPageLocators.json";

class HomePage {

  accessConfigStepsPage() {
    cy.get(tutorialPageLocators.homePage.configurationButton).click()
  }

  checkConfigStepPageTitle(expectedTitle: string) {
    cy.get(configStepsPageLocators.configPage.pageTitle).should('have.text', expectedTitle)
  }

  checkMenuVisibility(expectedMenus: string[]) {
    cy.get(tutorialPageLocators.homePage.menuButton).click()

    cy.get(tutorialPageLocators.homePage.menuItens)
      .children('a')
      .each(($th, index) => {
        cy.wrap($th).should('have.text', expectedMenus[index]);
      });
  }
}

export default HomePage;
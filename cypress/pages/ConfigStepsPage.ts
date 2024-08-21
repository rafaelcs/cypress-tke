import configStepsPageLocators from "../fixtures/configStepsPageLocators.json";

class ConfigStepsPage {

  checkTabsLength(menuLenght: number) {
    cy.get(configStepsPageLocators.configPage.tabButtons).children(configStepsPageLocators.configPage.childrenTabButtons).should('have.length', menuLenght)
  }
}

export default ConfigStepsPage;
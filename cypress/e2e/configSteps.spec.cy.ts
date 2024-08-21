import ConfigStepsPage from '../pages/ConfigStepsPage';
import HomePage from '../pages/HomePage';

describe("Config Steps Page Tests", () => {
    const configStepsPage = new ConfigStepsPage();
    const homePage = new HomePage();

    context('Check visibility of elements', () => {
        it('should check if the number of tabs is correct', () => {
            homePage.accessConfigStepsPage();
            configStepsPage.checkTabsLength(9);
        });
    })
});
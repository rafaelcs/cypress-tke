import LoginPage from '../pages/HomePage';

describe("Home Page Tests", () => {
    const loginPage = new LoginPage();

    context('Check iterability of components/buttons', () => {
        it('should navigate to agile configuration tutorial page', () => {
            loginPage.accessConfigStepsPage()
            loginPage.checkConfigStepPageTitle("Configure a tela do seu terminal AGILE");
        });
    
        it('should open the main menu and check if the submenus are visible', () => {
            const subMenus = ['Página inicial', 'Etapas de configuração', 'Contracapa']
    
            loginPage.checkMenuVisibility(subMenus);
        });
    })
});
//////// Sayfaları çağırma / Importing Page Objects
import { loginPage } from './pages/Login';
import { homePage } from './pages/HomePage';

describe('GoIT Login ve Logout Testleri (POM Yapısı) / GoIT Login and Logout Tests (POM Pattern)', () => {

  beforeEach(() => {
    // Ekran boyutunu ayarla / Set viewport size
    cy.viewport(1280, 720);
    // Giriş sayfasına git / Navigate to login page
    loginPage.navigate();
  });

  it('Test No 1: user888 ile giriş ve çıkış / Login and logout with user888', () => {
    /////// Sayfa metodlarını kullanarak giriş yap / Login using page methods
    loginPage.login('user888@gmail.com', '1234567890');

    ////// Sayfa metodlarını kullanarak çıkış yap / Logout using page methods
    homePage.logout();
    
    ////// Doğrulama: Giriş sayfasına dönüldü mü? / Verification: Returned to login page?
    cy.url().should('include', '/account/login');
  });

  it('Test No 2: testowyqa ile giriş ve çıkış / Login and logout with testowyqa', () => {
    //////// İkinci kullanıcı için giriş yap / Login for the second user
    loginPage.login('testowyqa@qa.team', 'QA!automation-1');

    ///////// Çıkış yap / Logout
    homePage.logout();
    
    ///////// Doğrulama: Giriş sayfasına dönüldü mü? / Verification: Returned to login page?
    cy.url().should('include', '/account/login');
  });

});

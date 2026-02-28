import SearchPage from '../support/pages/SearchPage';
import ProductPage from '../support/pages/ProductPage';
import CartPage from '../support/pages/CartPage';
import PaymentPage from '../support/pages/PaymentPage';

describe('User Story 05: Tam Ödeme ve Form Doğrulama Akışı', () => {
    
    const credentials = {
        email: 'test.test@hotmail.com',
        pass: 'wSGYF8gMt2s.Ap'
    };

    it('Login, Adres, Kargo ve Kart Bilgileri (Pozitif & Negatif Test)', () => {
        // --- ADIM 1: Sepet ve Login İşlemleri (AC1) ---
        cy.visit('/');
        SearchPage.searchProduct('roman');
        SearchPage.elements.productTitles().first().click({ force: true });
        ProductPage.elements.addToCartBtn().click({ force: true });
        cy.wait(3000); 
        ProductPage.elements.goToCartBtn().click({ force: true });
        CartPage.elements.checkoutBtn().click({ force: true });
        
        PaymentPage.elements.loginEmail().type(credentials.email, { force: true });
        PaymentPage.elements.loginPassword().type(credentials.pass, { force: true });
        PaymentPage.elements.loginSubmitBtn().click({ force: true });
        cy.wait(3000); 

        // --- ADIM 2: Adres ve Ödeme Geçişi (AC2 & AC8) ---
        PaymentPage.elements.proceedToPaymentBtn().click({ force: true });
        cy.wait(3000); 
        PaymentPage.elements.grandTotalOnPayment().should('exist').and('contain', 'TL');

        // --- ADIM 3: Kargo ve Ödeme Tipi (AC3 & AC4) ---
        PaymentPage.elements.pttCargoRadio().check({ force: true }).should('be.checked');
        PaymentPage.elements.creditCardTab().click({ force: true });

        // --- AC6: Pozitif Test - Kart Bilgileri ve Buton Aktivasyonu ---
        PaymentPage.elements.cardNameInput().type('Test Kullanıcısı', { force: true });
        PaymentPage.elements.cardNumberInput().type('4506340000000000', { force: true });
        PaymentPage.elements.cardExpiryInput().type('1230', { force: true });
        PaymentPage.elements.cardCvvInput().type('123', { force: true });

        // Tüm alanlar dolduğunda butonun aktif olduğunu doğrula
        PaymentPage.elements.paymentSubmitBtn().should('not.have.attr', 'disabled');

        // --- AC7: Negatif Test - Hatalı Kart ve Uyarı Mesajı ---
        // Kart numarasını bilerek hatalı yap
        PaymentPage.elements.cardNumberInput().clear({ force: true }).type('1111', { force: true });
        
        // Hata mesajının varlığını ve içeriğini doğrula
        PaymentPage.elements.cardNumberErrorMsg()
            .should('be.visible')
            .and('have.text', 'Geçersiz bir kart numarası girdiniz');
    });
});
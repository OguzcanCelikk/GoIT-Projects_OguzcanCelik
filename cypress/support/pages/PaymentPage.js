class PaymentPage {
    elements = {
        // Login Alanları
        loginEmail: () => cy.get('#login-form-131 [name="email"]'),
        loginPassword: () => cy.get('#login-form-131 [name="password"]'),
        loginSubmitBtn: () => cy.get('#ug-submit-btn'), //

        // Adres/Sipariş Sayfası Butonu
        proceedToPaymentBtn: () => cy.get('.order-next-btn').contains('Ödeme Adımına Geç'),
        

        // Sipariş Özeti ve Toplam
orderSummaryBox: () => cy.get('#order-products'),
grandTotalOnPayment: () => cy.get('#order-products .fw-bold').last(),

// AC3: Kargo Seçenekleri
        pttCargoRadio: () => cy.get('#cargo-item-input-1'),
        hepsijetCargoRadio: () => cy.get('#cargo-item-input-2'),

        // AC4: Ödeme Seçenekleri (Tablar)
        iyzicoTab: () => cy.get('#iyz-tab-payWithIyzico'),
        creditCardTab: () => cy.get('#iyz-tab-credit-card'),

        // AC5: Kredi Kartı Formu
        cardNameInput: () => cy.get('#ccname'),
        cardNumberInput: () => cy.get('#ccnumber'),
        cardExpiryInput: () => cy.get('#ccexp'),
        cardCvvInput: () => cy.get('#cccvc'),

        // AC6: Final Ödeme Butonu
        paymentSubmitBtn: () => cy.get('#iyz-payment-button'),
        cardNumberErrorMsg: () => cy.contains('Geçersiz bir kart numarası girdiniz'),

        // AC8: Sipariş Özeti Kutusu
        orderSummaryBox: () => cy.get('#order-summary'), 
        
        // Hatanın Çözümü: Direkt 'Genel Toplam' yazısının olduğu satırı bulur
        grandTotalOnPayment: () => cy.get('#order-summary').contains('Genel Toplam').parent()
    };

    };

export default new PaymentPage();
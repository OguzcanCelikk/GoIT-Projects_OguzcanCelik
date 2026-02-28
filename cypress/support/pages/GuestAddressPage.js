class GuestAddressPage {
    elements = {
        continueAsGuestBtn: () => cy.contains('button', /Üye Olmadan Devam Et/i),
        addressPageTitle: () => cy.contains(/Adres Bilgileri/i),

        // AC4: Görsellerden (image_223848 ve image_22a580) alınan gerçek ID'ler
        fullNameInput: () => cy.get('#fullname'), // firstname_lastname değil fullname'miş
        emailInput: () => cy.get('#order-address-form [name="email"]'), 
        phoneInput: () => cy.get('#mobile_phone'), // telephone değil mobile_phone'muş
        
        citySelect: () => cy.get('.city-container select'),
        townSelect: () => cy.get('.town-container select'),
        districtSelect: () => cy.get('.district-container select'),
        addressTextarea: () => cy.get('#order-address-form [name="address"]'),

        saveAddressBtn: () => cy.get('button').contains('Adresi Kaydet'),
        errorMessage: () => cy.get('.popover-item.fade-in.inline')
    };
}
export default new GuestAddressPage();
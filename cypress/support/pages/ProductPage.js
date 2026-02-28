class ProductPage {
    elements = {
        // AC1 & AC2: Temel Ürün Bilgileri (Görsellerden alınan ID'ler)
        productTitle: () => cy.get('#product-title'),
        authorName: () => cy.get('#model-title'),
        publisherName: () => cy.get('#brand-title'),
        productPrice: () => cy.get('.product-price'),
        
        // AC3: Ürün Hakkında Bilgiler Bölümü
        // 'scrollIntoView' için başlığı, içerik kontrolü için kutuları hedefliyoruz
        infoSectionTitle: () => cy.get('.info-title'), 
        productInfoBoxes: () => cy.get('.book-info-box'), 
        
        // AC4: Sepete Ekle Butonu (Nokta atışı ID)
        addToCartBtn: () => cy.get('#addToCartBtn'),

        // AC5: Başarı Pop-up'ı ve İçindeki Elemanlar
        // Overlay sorununu aşmak için modalın kendisini hedefliyoruz
        successModal: () => cy.get('#modal-popup-cart'), 
        successMessage: () => cy.contains('span', 'Ürün Başarıyla Sepete Eklendi'),
        goToCartBtn: () => cy.get('#cart-popup-go-cart'),

        // AC6: Sağ Üstteki Sepet Sayacı İkonu
        cartCountBadge: () => cy.get('.cart-soft-count')
    }; // <-- elements bloğu BURADA kapanmalı. Kırmızı çizgi olmamalı.

    // Gerekirse buraya yardımcı fonksiyonlar eklenebilir (Örn: sepeteEkle())
}
export default new ProductPage();
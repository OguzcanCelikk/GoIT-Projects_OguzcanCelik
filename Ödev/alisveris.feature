Feature: Çevrimiçi Mağaza Alışveriş Süreci / Online Store Shopping Process

  Scenario: Kullanıcının ürün arayıp başarılı bir şekilde satın alması / User searches for a product and purchases successfully
    Given Kullanıcı "www.trendyol.com" ana sayfasındadır / User is on the "www.trendyol.com" homepage
    And Kullanıcı sisteme kayıtlı e-posta ve şifresi ile giriş yapmıştır / User has logged in with a registered email and password
    When Arama çubuğuna "Kulaklık" yazar ve "Ara" butonuna tıklar / User types "Headphones" in the search bar and clicks the "Search" button
    And Arama sonuçları sayfasında listelenen ilk ürüne tıklar / User clicks on the first product listed in the search results
    And Ürün detay sayfasında "Sepete Ekle" butonuna tıklar / User clicks the "Add to Cart" button on the product detail page
    And "Sepetim" sayfasına gider ve "Alışverişi Tamamla" butonuna tıklar / User goes to the "My Cart" page and clicks "Complete Purchase"
    And Teslimat adresi ve ödeme bilgilerini eksiksiz doldurur / User fills in the delivery address and payment details completely
    And "Siparişi Onayla" butonuna basar / User clicks the "Confirm Order" button
    Then Ekranda "Siparişiniz Başarıyla Alındı" mesajını görmelidir / User should see the "Your Order Has Been Successfully Received" message
    And Ekranda sipariş özetini ve sipariş numarasını görmelidir / User should see the order summary and order number on the screen

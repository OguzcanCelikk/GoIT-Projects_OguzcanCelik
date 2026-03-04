describe('API Otomasyon Testleri / API Automation Tests (JSONPlaceholder)', () => {

    const baseUrl = 'https://jsonplaceholder.typicode.com';

    //////// TEST 1: GET İsteği / GET Request
    it('1. GET - Tüm gönderileri getir ve 200 olduğunu doğrula / Fetch all posts and verify 200', () => {
        cy.request('GET', `${baseUrl}/posts`).then((response) => {
            expect(response.status).to.eq(200);
            ////// Gelen cevabın bir liste olduğunu ve boş olmadığını doğrula / Verify that response is a non-empty array
            expect(response.body).to.be.an('array').that.is.not.empty;
        });
    });

    ///////// TEST 2: POST İsteği / POST Request
    it('2. POST - Yeni bir gönderi oluştur / Create a new post', () => {
        const newPost = {
            title: 'Test Otomasyonu',
            body: 'Cypress ile API testi.',
            userId: 1
        };

        cy.request('POST', `${baseUrl}/posts`, newPost).then((response) => {
            expect(response.status).to.eq(201); /////// 201: Oluşturuldu / Created
            expect(response.body.title).to.eq('Test Otomasyonu');
        });
    });

    /////////// TEST 3: Header Gönderimi ve Kontrolü / Header Sending and Verification
    it('3. HEADERS - Özel Header gönderimi / Sending custom headers', () => {
        cy.request({
            method: 'GET',
            url: `${baseUrl}/posts/1`,
            headers: {
                'User-Agent': 'MyCypressBot/1.0',
                'X-Custom-Header': 'GoIT-Odev'
            }
        }).then((response) => {
            expect(response.status).to.eq(200);
            ///////// Gelen cevabın JSON formatında olduğunu doğrula / Verify response is in JSON format
            expect(response.headers['content-type']).to.include('application/json');
        });
    });

    //////////// TEST 4: Dinamik Parametreler / Dynamic Query Parameters
    it('4. DYNAMIC PARAMS - Rastgele bir kullanıcı ID ile sorgu yap / Query with a random user ID', () => {
        ////////// 1 ile 10 arasında rastgele sayı üret / Generate a random number between 1 and 10
        const randomId = Math.floor(Math.random() * 10) + 1;

        cy.request('GET', `${baseUrl}/users?id=${randomId}`).then((response) => {
            expect(response.status).to.eq(200);
            ////////// Gelen listedeki ilk kullanıcının ID'sini doğrula / Verify the ID of the first user in the list
            expect(response.body[0].id).to.eq(randomId);
        });
    });

    ////////// TEST 5: Veri Tipi Kontrolü / Body Data Type Check
    it('5. BODY CHECK - Gelen veri tiplerini kontrol et / Verify response data types', () => {
        cy.request('GET', `${baseUrl}/users/1`).then((response) => {
            const user = response.body;
            
            //////////// ID'nin sayı, ismin string olduğunu doğrula / Verify ID is a number and name is a string
            expect(user).to.have.property('id').that.is.a('number');
            expect(user).to.have.property('name').that.is.a('string');
            expect(user).to.have.property('email').that.is.a('string');
            
            ////////// Email içinde @ işareti var mı? / Does the email include '@'?
            expect(user.email).to.include('@');
        });
    });

    ////////// TEST 6: Performans Testi / Performance Test
    it('6. PERFORMANCE - İstek süresini ölç (1500ms altı) / Measure request duration (under 1500ms)', () => {
        cy.request('GET', `${baseUrl}/photos`).then((response) => {
            /////////// response.duration isteğin kaç milisaniye sürdüğüdür / response.duration is the request time in ms
            expect(response.duration).to.be.lessThan(1500); 
        });
    });

    //////////// TEST 7: PUT İsteği / PUT Request
    it('7. PUT - Mevcut bir kaydı güncelle / Update an existing record', () => {
        const updateData = {
            id: 1,
            title: 'Güncellenmiş Başlık',
            body: 'Güncellenmiş içerik',
            userId: 1
        };

        cy.request('PUT', `${baseUrl}/posts/1`, updateData).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body.title).to.eq('Güncellenmiş Başlık');
        });
    });

    ////////// TEST 8: DELETE İsteği / DELETE Request
    it('8. DELETE - Bir kaydı sil / Remove a record', () => {
        cy.request('DELETE', `${baseUrl}/posts/1`).then((response) => {
            expect(response.status).to.eq(200); ///////// JSONPlaceholder silme işlemine 200 döner / Returns 200 for deletion
        });
    });

    ///////////// TEST 9: Negatif Test / Negative Test
    it('9. NEGATIVE - Olmayan bir sayfaya git (404 Bekleniyor) / Navigate to non-existent page (Expecting 404)', () => {
        // failOnStatusCode: false diyoruz ki Cypress testi durdurmasın / Set to false so Cypress doesn't stop execution
        cy.request({
            method: 'GET',
            url: `${baseUrl}/posts/999999`, /////// Böyle bir ID yok / This ID does not exist
            failOnStatusCode: false 
        }).then((response) => {
            expect(response.status).to.eq(404); //////// Bulunamadı hatası dönmeli / Should return Not Found error
        });
    });

    /////////// TEST 10: PATCH İsteği / PATCH Request
    it('10. PATCH - Sadece başlığı değiştir / Update only the title', () => {
        cy.request('PATCH', `${baseUrl}/posts/1`, { title: "Sadece Başlık Değişti" }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body.title).to.eq("Sadece Başlık Değişti");
        });
    });

});

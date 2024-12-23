describe('API Endpoint - Sentiment Analysis (Validations)', () => {
    const apiKEY = Cypress.env('API_KEY')
    const apiURL = Cypress.env('API_URL')
    it('should return a positive sentiment for valid input', () => {
        const requestBody = {
            DocumentText: "The product is amazing, and I absolutely love it!",
            PrivateKey: apiKEY,
        };

        cy.request({
            method: 'GET',
            url: apiURL,
            body: requestBody,
        }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body.DocSentimentResultString).to.eq('positive');
            expect(response.body.DocSentimentValue).to.be.greaterThan(0);
        });
    });

    it('should return a negative sentiment for an average input', () => {
        const requestBody = {
            DocumentText: "The service was okay, nothing special to mention.",
            PrivateKey: apiKEY,
        };

        cy.request({
            method: 'POST',
            url: apiURL,
            body: requestBody,
        }).then((response) => {
            console.log(response)
            expect(response.status).to.eq(200);
            expect(response.body.DocSentimentResultString).to.eq('negative');
        });
    });

    it('should return an error for empty input', () => {
        const requestBody = {
            DocumentText: "",
            PrivateKey: apiKEY,
        };

        cy.request({
            method: 'POST',
            url: apiURL,
            body: requestBody,
            failOnStatusCode: false,
        }).then((response) => {
            console.log(response)
            expect(response.status).to.eq(200);
            expect(response.body.ErrorMessage).to.contain("Please specify document text!");
        });
    });
});
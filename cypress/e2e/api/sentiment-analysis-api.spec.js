describe('API Endpoint - Sentiment Analysis', () => {
    const apiURL = Cypress.env('API_URL')
    const apiKEY = Cypress.env('API_KEY')
    it('should return a positive sentiment prediction for valid input', () => {
        cy.request({
            method: 'GET',
            url: apiURL,
        }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body.DocSentimentResultString).to.eq('positive');
        });
    });

    it('should return an error for empty input', () => {
        const requestBody = {
            DocumentText: "",
            PrivateKey: apiKEY,
        }
        cy.request({
            method: 'POST',
            url: apiURL,
            body: requestBody,
            failOnStatusCode: false
        }).then((response) => {
            console.log(response)
            console.log(apiKEY)

            expect(response.status).to.eq(200);
            expect(response.body.ErrorMessage).to.contain("Please specify document text!");
        });
    });
});
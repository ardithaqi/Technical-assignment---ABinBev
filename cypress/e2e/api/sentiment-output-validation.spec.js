describe('API Endpoint - Sentiment Analysis (Model Output Validation)', () => {
    const apiKEY = Cypress.env('API_KEY')
    const apiURL = Cypress.env('API_URL')

    const testCases = [
        {
            input: "The hotel was fantastic, with great service and beautiful rooms.",
            expectedSentiment: 'positive',
        },
        {
            input: "The movie was alright but not very engaging.",
            expectedSentiment: 'neutral',
        },
        {
            input: "Terrible experience, the customer service was unhelpful and rude.",
            expectedSentiment: 'negative',
        },
    ];

    testCases.forEach((testCase) => {
        it(`should classify sentiment correctly for input: "${testCase.input}"`, () => {
            const requestBody = {
                DocumentText: testCase.input,
                PrivateKey: apiKEY,
            };

            cy.request({
                method: 'POST',
                url: apiURL,
                body: requestBody,
            }).then((response) => {
                expect(response.status).to.eq(200);
                expect(response.body.DocSentimentResultString).to.eq(testCase.expectedSentiment);
            });
        });
    });

    it('should validate the sentiment value for a positive sentiment', () => {
        const requestBody = {
            DocumentText: "I absolutely love this product",
            PrivateKey: apiKEY,
        };

        cy.request({
            method: 'POST',
            url: apiURL,
            body: requestBody,
        }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body.DocSentimentResultString).to.eq('positive');
            expect(response.body.DocSentimentValue).to.be.greaterThan(0);
        });
    });
});
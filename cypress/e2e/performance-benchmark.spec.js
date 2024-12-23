describe('Performance Benchmarking - Sentiment Analysis API', () => {
    const apiKey = Cypress.env('API_KEY');
    const apiUrl = Cypress.env('API_URL');

    it('should benchmark API response times', () => {
        // Load the performance benchmark JSON file
        cy.fixture('performance-benchmark.json').then((performanceTests) => {
            performanceTests.testCases.forEach((testCase) => {
                const requestBody = {
                    DocumentText: testCase.inputText,
                    PrivateKey: apiKey,
                };

                cy.request({
                    method: 'POST',
                    url: apiUrl,
                    body: requestBody,
                }).then((response) => {
                    cy.log(`Actual response time: ${response.duration}ms`);
                    expect(response.status).to.eq(200);
                    expect(response.duration).to.be.lessThan(testCase.expectedResponseTime);
                });
            });
        });
    });
});
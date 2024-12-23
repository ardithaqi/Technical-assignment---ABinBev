describe('User Interface - Sentiment Analysis', () => {
    it('should return a positive sentiment for a valid input', () => {
        cy.visit('https://text2data.com/Demo');
        cy.get('#textArea')
            .clear().type('I love this product! It works perfectly.');

        //Submit the form
        cy.get('#btnRunAnalysis')
            .click();

        cy.get('[style="font-size:16px; font-weight:bold;"]')
            .should('contain', 'positive');
    });

    it('should handle invalid input and show an error message', () => {
        cy.visit('https://text2data.com/Demo');

        cy.get('#textArea')
            .clear();
        cy.get('#btnRunAnalysis')
            .click();

        //Validate that an error message is displayed
        cy.get('.alert').eq(1)
            .should('contain', 'Text is too short, more than 5 characters is required!');
    });
});

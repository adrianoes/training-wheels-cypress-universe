

it('deve fazer o upload da minha foto', function(){
    cy.visit('/upload')

    const imageFile = 'cypress/fixtures/image.jpg'

    cy.get('input[name=file]').selectFile(imageFile, {force: true})
    cy.get('input[value=Upload]').click()
    cy.get('img[src="/uploads/image.jpg"]', {timeout: 7000})
    .should('be.visible')
    
})

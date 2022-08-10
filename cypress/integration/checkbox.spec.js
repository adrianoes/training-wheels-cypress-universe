

it('deve marcar os top 5 filmes da marvel', function(){
    cy.visit('/checkboxes')

    const movies = [
        'cap',
        'ironman',
        'blackpanther',
        'shangchi',
        'eternals'
    ]

    movies.forEach(function(m){
        cy.get(`input[name=${m}]`)
            .click()
            .should('be.checked')
    })
})
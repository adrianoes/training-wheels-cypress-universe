
    const niceIFrame = function() {
        return cy
            .get('#weareqaninja')
            .its('0.contentDocument.body').should('not.be.empty')
            .then(cy.wrap)
    }

    const badIFrame = function() {
        return cy
            .get('iframe[src*=instagram]')
            .its('0.contentDocument.body').should('not.be.empty')
            .then(cy.wrap)
    }
    
it('deve validar o total de seguidores', function(){
    cy.visit('/nice_iframe')

    niceIFrame()
    .contains('.UsernameText', 'qacademy_oficial')
            //.contains('.FollowerCountText', '6.920 seguidores')// se usar o numero fixo de seguidores, quando entrar mais seguidores o teste quebra, então vou usar o nome do site
        .should('be.visible')
})

it('deve validar o total de seguidores', function(){
    cy.visit('/bad_iframe')

    badIFrame()
        //.contains('.FollowerCountText', '6.920 seguidores')// se usar o numero fixo de seguidores, quando entrar mais seguidores o teste quebra, então vou usar o nome do site
        .contains('.UsernameText', 'qacademy_oficial')
        .should('be.visible')
})



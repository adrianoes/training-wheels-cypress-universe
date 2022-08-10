

it('deve exibir 7 séries no total', function(){
    cy.visit('/tables')

    cy.get('table tbody tr')
        .then(function(series){
            expect(series).to.have.length(7)
        })
})

it('deve exibir a série Cobra Kai', function(){
    cy.visit('/tables')

    cy.contains('table tbody tr', 'Cobra Kai')
        .then(function(item){
            expect(item).to.contain('Netflix')
            expect(item).to.contain('Netflix')
            expect(item).to.contain('2018')
        })
})

it('deve remover a série round 6', function(){
    cy.visit('/tables')

    cy.contains('table tbody tr', 'Round 6')
        .then(function(item){
            item.find('.delete').trigger('click')// poderiamos usar o click ao invés do trigger click, mas click nesse caso é uma sufunção de find, e nesse caso ela está deprecada para ser usada como subfunção de find, então usamos o trigger
        })
        .should('not.exist')
    cy.get('table tbody tr')
        .then(function(series){
        expect(series).to.have.length(6)
    })
})

//pode-se fazer um before envolvendo o acesso a página
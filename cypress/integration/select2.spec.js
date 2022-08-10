
describe('select 2 com unica e múltiplas opções e com hook', function(){

    before(function(){
        cy.visit('/apps/select2/index.html')   // Acessa a página só uma vez, portanto permite que vejamos os resultados dos dois testes na tela         
    })

    it('deve selecionar uma única opção', function(){
        //cy.visit('/apps/select2/index.html')

        cy.get('.select2-selection--single').click()
        cy.contains('.select2-results__option', 'Cypress').click()
    })

    it('deve selecionar múltiplas opções', function(){
        //cy.visit('/apps/select2/index.html')

        const frameworks = [
            'Cypress',
            'Robot Framework',
            'Protractor'
        ]

        frameworks.forEach(function(framework){
            cy.get('.select2-selection--multiple').click()
            cy.contains('.select2-results__option', framework).click()
        })

    })
})

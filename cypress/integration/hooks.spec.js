

describe('suite de testes', function(){

    before(function(){
        cy.log('Aqui temos algo que roda antes de TODOS os testes')
    })

    beforeEach(function(){
        cy.log('Aqui temos algo que roda antes de CADA teste')
    })

    after(function(){
        cy.log('Aqui temos algo que roda depois de TODOS os testes')
    })

    afterEach(function(){
        cy.log('Aqui temos algo que roda depois de CADA teste')
    })

    it('test 1', function(){
        cy.log('testando o teste 1')
    })
    
    it('test 2', function(){
        cy.log('testando o teste 2')
    })
    
    it('test 3', function(){
        cy.log('testando o teste 3')
    })



})

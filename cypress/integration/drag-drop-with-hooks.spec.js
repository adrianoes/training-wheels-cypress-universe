

describe('suite de testes', function(){

        before(function(){
            cy.visit('/drag_and_drop')            
        })

    it('deve arrastar o cypress para a caixinha do node', function(){
        const dataTransfer = new DataTransfer()
        cy.get('img[alt=Cypress]').trigger('dragstart', {dataTransfer})
        cy.get('.nodejs figure[draggable=true]').trigger('drop', {dataTransfer})
    })

    it('deve arrastar o robot para a caixinha do python', function(){
        const dataTransfer = new DataTransfer()
        cy.get('img[alt="Robot Framework"]').trigger('dragstart', {dataTransfer})// aspas duplsa para corrigir o problema do espaço entre as palavras Robot e Framework
        cy.get('.python figure[draggable=true]').trigger('drop', {dataTransfer})
    })
})
//Com o gancho, acessa a página uma unica vez antes dos testes, portanto o desfecho final é mais elegante

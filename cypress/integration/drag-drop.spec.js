

it('deve arrastar o cypress para a caixinha do node', function(){
    cy.visit('/drag_and_drop')

    const dataTransfer = new DataTransfer()

    cy.get('img[alt=Cypress]').trigger('dragstart', {dataTransfer})
    cy.get('.nodejs figure[draggable=true]').trigger('drop', {dataTransfer})
})

it('deve arrastar o robot para a caixinha do python', function(){
    cy.visit('https://training-wheels-qaninja.herokuapp.com/drag_and_drop')

    const dataTransfer = new DataTransfer()

    cy.get('img[alt="Robot Framework"]').trigger('dragstart', {dataTransfer})// aspas duplsa para corrigir o problema do espaço entre as palavras Robot e Framework
    cy.get('.python figure[draggable=true]').trigger('drop', {dataTransfer})
})

//Como os testes não estão no mesmo IT, e o ultimo teste a ser executado é o do Robot, após ele acessar novamente a página, portanto fica parecendo que moveu só o robot, mas moveu, deu o refresh na pagina e depois moveu o outro

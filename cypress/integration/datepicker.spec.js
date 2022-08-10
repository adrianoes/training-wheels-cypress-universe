

it('selecionar a data de nascimento', function(){
    cy.visit('/datepicker')

    const date = {
        month: 'fev',
        year: '1983',
        day: '1'
    
      }

    
    cy.get('.datetimepicker-dummy-input').click()


    //cy.get('.datepicker-month[data-month="12"]').click()
    //cy.contains('.datepicker-month', new RegExp(date.month)).click()



    cy.get('.datepicker-nav-month').click()
    cy.contains('.datepicker-month', date.month).click()

    cy.get('.datepicker-nav-year').click()
    cy.contains('.datepicker-year span', date.year).click()

    //cy.contains('.datepicker-year span', new RegExp("^" + date.year + "$", "g")).click()
    //cy.get('.datepicker-year[data-year="1989"]').click()

    cy.contains('button[class=date-item]', new RegExp("^" + date.day + "$", "g")).click()
    //cy.contains('button[class=date-item]', date.day).click()


})

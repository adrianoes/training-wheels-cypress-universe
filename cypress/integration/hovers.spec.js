
it('deve exibir o nome da tecnologia ao passar o mouse', function(){
    cy.visit('/hovers')

    const techs = [
        {img: 'img[src*=python]', tag: '.tag-python', brand: 'Python'},
        {img: 'img[src*=golang]', tag: '.tag-golang', brand: 'Golang'},
        {img: 'img[src*=nodejs]', tag: '.tag-nodejs', brand: 'Node.js'},
        {img: 'img[src*=netcore]', tag: '.tag-netcore', brand: '.NETCore'}
    ]
    //cy.get('img[src="/img/nodejs.png"]') //reduzindo o localizador
    //cy.get('img[src*=nodejs]').click() // click funciona mas se for imagem que tiver relacionada com botão, ai vai clicar antes de validar o teste
    
    techs.forEach(function(tech){
        cy.get(tech.img)
        .realHover('mouse')// plugin cypress-real-events

    cy.get(tech.tag)
        .should('be.visible')// passa muito rápido e só vemos o último, mas com o "should('be.visible')", garantimos que na reprodução de um possível movimento lento, na rapidez de um usuário comum, o nome estaria visível
        .should('have.text', tech.brand)

    })
    

})
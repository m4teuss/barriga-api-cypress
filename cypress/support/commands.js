
// Aqui faço login na aplicação, pego token valido e retono para ser usado na criação de conta.
Cypress.Commands.add('PegarToken', (usuario, senha) => {
   
     cy.request({
        method: 'POST',
        url:  'https://barrigarest.wcaquino.me/signin',

        // body é um objeto, aqui estamos fazendo requisição para API 
        body: {
             email: usuario,
             senha: senha, 
             redirecionar: false
        }

        // como fizemos uma requisição acima, api nos retorna uma resposta.
        }).its('body.token').should('not.be.empty') //reduzir o escopo apenas para o token, verificar token não deve estar vazio

        .then(token => {
            return token;
        })
})
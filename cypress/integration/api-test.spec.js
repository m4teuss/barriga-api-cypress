
//const faker = require('faker')

describe('test api', () => {

    beforeEach(() =>{
        // logar // eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MX0._8dEoo99USVc5NdBo3wMyWfmjX2lwaVhJs9YbNn_WWM

    })


    it('logar', () => {
        cy.request({
            method: 'POST',
            url:  'https://barrigarest.wcaquino.me/signin',
            // body é um objeto, aqui estamos fazendo requisição para API 
            body: {
                 email: "a@a",
                 senha: "a", 
                 redirecionar: false
            }

        // como fizemos uma requisição acima, api nos retorna uma resposta.
        }).its('body.token').should('not.be.empty') // body não deve estar vazio

          .then(token => {  //aqui tenho valor do token
            
            cy.request({
                method: 'POST',
                url: 'https://barrigarest.wcaquino.me/contas',
                headers:{
                    Authorization: `JWT ${token}`,  // Request Headers: autorization passo a chave de autenticação
                },

                body: {
                    nome: 'Conta via reset55'
                }
        
        }).as('response')
        
    })

    cy.get('@response').then(res => {

        expect(res.status).to.be.equal(201) // validando status code
        expect(res.body).to.have.property('id') // id dinamico, validamos somente atributo
        expect(res.body).to.have.property('nome',  'Conta via reset4')



    })


})


}) //fecha describe
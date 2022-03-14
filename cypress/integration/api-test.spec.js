
//const faker = require('faker')

describe('test api', () => {
let token
    before(() => {
        cy.PegarToken('a@a', 'a') // Passando usuario e senha para função, a mesma retornará o token válido
        .then(tokenRecebe => {  // atraves do "then" pego o token válido vindo da função 
            token = tokenRecebe
            
        })  
    })


    it('Criar conta', () => {
       
            cy.request({
                method: 'POST',
                url: 'https://barrigarest.wcaquino.me/contas',
                headers:{
                    Authorization: `JWT ${token}`,  // Request Headers: autorization passo a chave de autenticação.
                },

                // No body passo valores para serem inseridos
                body: {
                    nome: 'Conta via reset1231'
                }
        
        }).as('response') // criando apelido 
        

        // validar a respostas vinda da requsição feita 
        cy.get('@response').then(res => {
            expect(res.status).to.be.equal(201) // validando status code
            expect(res.body).to.have.property('id') // id dinamico, validamos somente atributo
            expect(res.body).to.have.property('nome',  'Conta via reset1231')



    }) // fecha response

}) // fecha o it = cenário


}) //fecha describe
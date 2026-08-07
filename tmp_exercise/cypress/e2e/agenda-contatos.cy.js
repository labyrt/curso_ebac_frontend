/// <reference types="cypress" />

describe('Agenda de Contatos - testes E2E', () => {
  const preencherFormulario = ({ nome, email, telefone }) => {
    cy.get('input[placeholder="Nome"]').clear().type(nome)
    cy.get('input[placeholder="E-mail"]').clear().type(email)
    cy.get('input[placeholder="Telefone"]').clear().type(telefone)
  }

  const adicionarContato = (contato) => {
    preencherFormulario(contato)
    cy.get('.adicionar').click()
    cy.contains('.contato', contato.nome).should('be.visible')
  }

  beforeEach(() => {
    cy.visit('/')
    cy.get('input[placeholder="Nome"]').should('be.visible')
    cy.get('input[placeholder="E-mail"]').should('be.visible')
    cy.get('input[placeholder="Telefone"]').should('be.visible')
  })

  it('deve incluir um novo contato', () => {
    const contato = {
      nome: 'Lucy Cypress',
      email: 'lucy.cypress@example.com',
      telefone: '11999990001'
    }

    adicionarContato(contato)

    cy.contains('.contato', contato.nome).within(() => {
      cy.contains(contato.nome).should('be.visible')
      cy.contains(contato.email).should('be.visible')
      cy.contains(contato.telefone).should('be.visible')
    })
  })

  it('deve alterar um contato existente', () => {
    const contatoOriginal = {
      nome: 'Contato para Editar',
      email: 'editar@example.com',
      telefone: '11999990002'
    }

    const contatoAlterado = {
      nome: 'Contato Alterado',
      email: 'alterado@example.com',
      telefone: '11999990003'
    }

    adicionarContato(contatoOriginal)

    cy.contains('.contato', contatoOriginal.nome)
      .find('.edit')
      .click()

    preencherFormulario(contatoAlterado)
    cy.get('.alterar').click()

    cy.contains('.contato', contatoOriginal.nome).should('not.exist')

    cy.contains('.contato', contatoAlterado.nome)
      .should('be.visible')
      .within(() => {
        cy.contains(contatoAlterado.nome).should('be.visible')
        cy.contains(contatoAlterado.email).should('be.visible')
        cy.contains(contatoAlterado.telefone).should('be.visible')
      })
  })

  it('deve remover um contato', () => {
    const contato = {
      nome: 'Contato para Remover',
      email: 'remover@example.com',
      telefone: '11999990004'
    }

    adicionarContato(contato)

    cy.contains('.contato', contato.nome)
      .find('.delete')
      .click()

    cy.contains('.contato', contato.nome).should('not.exist')
  })
})

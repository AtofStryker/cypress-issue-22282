describe('keycloak', () => {
  const user = 'myuser'
  const auth_password ='testme1234'

  it('passes', () => {
    cy.visit('http://localhost:8081/')
    cy.get('#login').click()
    cy.origin(
      "http://localhost:8080",
      { args: { user, auth_password } },
      ({ user, auth_password }) => {
        cy.get("#username")
          .type(user)
          .get("#password")
          .type(auth_password);
        cy.get("#kc-login").click();
     }
    );

    // should redirect with a valid code in the url
    cy.get('#app-details').contains('Welcome to my app')
  })

  it('also passes', () => {
    cy.visit('https://www.keycloak.org/app/#url=http://localhost:8080&realm=myrealm&client=myclient')
    cy.get('#login').click()
    cy.origin(
      "http://localhost:8080",
      { args: { user, auth_password } },
      ({ user, auth_password }) => {
        cy.get("#username")
          .type(user)
          .get("#password")
          .type(auth_password);
        cy.get("#kc-login").click();
     }
    );

    // should redirect with a valid code in the url
    cy.get('#user-details').contains('my user')
  })
})
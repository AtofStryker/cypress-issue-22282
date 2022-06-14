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

  it('passes 2', () => {
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


  it('passes 3', () => {
    cy.visit('https://www.keycloak.org/app/#url=http://localhost:8080&realm=myrealm&client=myclient')
    cy.window().then((win) => {
      win.location.href = 'http://localhost:8080/realms/myrealm/protocol/openid-connect/auth?client_id=myclient&redirect_uri=http%3A%2F%2Flocalhost%3A8081%2F%23url%3Dhttp%3A%2F%2Flocalhost%3A8080%26realm%3Dmyrealm%26client%3Dmyclient&state=95fc5616-4e00-4914-8225-8dd2dd7d8a1a&response_mode=fragment&response_type=code&scope=openid&nonce=afca4942-441b-48c6-9145-5f4a146946cd'
    })
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
  })

  it('fails on 301 redirect', () => {
    cy.intercept('GET', '/stubbed-site', (req) => {
      // statusCode defaults to `302`
      req.redirect('http://localhost:8080/realms/myrealm/protocol/openid-connect/auth?client_id=myclient&redirect_uri=http%3A%2F%2Flocalhost%3A8081%2F%23url%3Dhttp%3A%2F%2Flocalhost%3A8080%26realm%3Dmyrealm%26client%3Dmyclient&state=95fc5616-4e00-4914-8225-8dd2dd7d8a1a&response_mode=fragment&response_type=code&scope=openid&nonce=afca4942-441b-48c6-9145-5f4a146946cd', 301)
    })
    cy.visit('/stubbed-site')
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
  })
})
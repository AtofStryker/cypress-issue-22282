#### Steps to Reproduce

* Follow the steps to getting KeyCloak running locally with Docker [here](https://www.keycloak.org/getting-started/getting-started-docker) while accounting for the exceptions below:
* Be sure to keep the docker image running on port 8080. Killing the docker image will result in all configurations lost.
* When creating the user password, set the password to `testme1234` and toggle off temporary.
* Set the Root URL / Admin URL on the client to `http://localhost:8080`
* Set Valid Redirect URIs to `*`
* Set Web Origins to `*`

* Inside the project directory, run `yarn`.
* Spin up the dev server by running `yarn serve`
* In another terminal, run `yarn cypress open` and execute the `keycloak.cy.js` test.
* Notice the webapp redirect to KeyCloak and back to main webapp through `cy.origin`
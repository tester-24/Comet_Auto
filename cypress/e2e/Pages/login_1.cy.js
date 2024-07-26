export class LoginPage {

    enterUsername() {
        //cy.get(':nth-child(2) > .text_form').clear()
        cy.get('.userid_wrap > .input_wrap > .text_form').type('1126')
    }

    enterPassword() {
        cy.get('#LoginPassword').type('Jainam@1234')
    }

    clickLogin() {
        cy.get('.login_button_wrap > p').click({ force: true });
    }
}
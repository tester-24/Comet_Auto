/// <reference types="cypress"/>

import { LoginPage } from "./comet_login.cy.js"
const loginPage = new LoginPage

it('Comet_Jainam', () => {
    cy.visit('https://comet.jainam.in/#/startup')
    cy.wait(3000)
    cy.get('.login-space-btn').click()

    loginPage.enterUsername()
    loginPage.enterPassword()
    loginPage.clickLogin()
    cy.wait(3000)

    //Pin Page
    cy.get('.form_wrap').click()
    cy.wait(2000)
 
//     //Enter Pin
//    cy.wait(1000);
//    cy.get('[formcontrolname="otp1"]').type('0');
//    cy.get('[formcontrolname="otp2"]').type('0');
//    cy.get('[formcontrolname="otp3"]').type('0');
//    cy.get('[formcontrolname="otp4"]').type('0');
//    cy.wait(3000);


      //Enter Pin
  cy.wait(1000);
  cy.get('[formcontrolname="otp1"]').type('1');
  cy.get('[formcontrolname="otp2"]').type('2');
  cy.get('[formcontrolname="otp3"]').type('3');
  cy.get('[formcontrolname="otp4"]').type('4');
  cy.wait(3000);
   
   //cy.get('.continue_button_wrap > p').click()
   cy.wait(3000)
   
   //cy.get('.continue_button_wrap > p').click()
   cy.wait(3000)

 
   
    // //Click on form
    // cy.get('#AddNomineeDetail > .modal-dialog > .modal-content > .modal-body > .close').click({ force: true })
    // cy.wait(5000);
  


    //Click on Utilities 

    cy.get('#UtilitiesDropdown').click()
    cy.wait(3000)

    //Click on Corporate Actions 

    //cy.get('#UtilitiesDropdown').click()
    cy.get('[href="#/corporate-actions"]').click()
    cy.wait(3000)

    //Click on CLICK HERE Link 
    cy.get('.timeline_div > ul > li > a').click()
    cy.wait(3000)

    // Corporate Actions
    cy.get('.py-4 > .heading-text > .d-flex > .col-12')
    cy.wait(3000)

    

    cy.window().scrollTo('bottom')

    cy.get('[aria-hidden="false"] > .modal-dialog > .modal-content > .modal-header > .btn-close').click()

    // Click on 2 Page
    cy.get('.bid-section').click()

    //Upcoming Corporate Action
    cy.get('.bid-history.ng-star-inserted > .container').click()
    cy.wait(3000)

    //Click on PLEASE SELECT 
    cy.get('select.form-control')
cy.get('select.custom-select')
cy.get('div.d-flex select')
cy.get('div.flex-wrap select')
cy.get('div.align-items-center select')
cy.get('div.heading-text select')
cy.get('div.d-block select')
cy.get('div.d-md-flex select')
cy.get('div.d-lg-flex select')
cy.get('div.d-xl-flex select')
cy.get('div.justify-content-between select')
cy.get('div.row select')


    
})
/// <reference types="cypress"/>

import { LoginPage } from "./comet_login.cy.js"
const loginPage = new LoginPage

it('Comet_Jainam', () => {
    cy.visit('https://comet.jainam.in/#/startup')
    cy.wait(3000)
    cy.get('.login-space-btn').click({ force: true })

    loginPage.enterUsername()
    loginPage.enterPassword()
    loginPage.clickLogin()
    cy.wait(3000)

    //Pin Page
    cy.get('.form_wrap').click()
    cy.wait(2000)

    // //Enter Pin
    // cy.wait(1000);
    // cy.get('[formcontrolname="otp1"]').type('0')
    // cy.get('[formcontrolname="otp2"]').type('0')
    // cy.get('[formcontrolname="otp3"]').type('0')
    // cy.get('[formcontrolname="otp4"]').type('0')
    // cy.wait(4000)


    //Enter Pin
    cy.wait(3000);
    cy.get('[formcontrolname="otp1"]').type('1');
    cy.get('[formcontrolname="otp2"]').type('2');
    cy.get('[formcontrolname="otp3"]').type('3');
    cy.get('[formcontrolname="otp4"]').type('4');
    cy.wait(3000);
   
   //cy.get('.continue_button_wrap > p').click()
   cy.wait(3000)


    // //Click on form
    // cy.get('#AddNomineeDetail > .modal-dialog > .modal-content > .modal-body > .close').click({ force: true })
    // cy.wait(4000);

    // click on Reports
    cy.get('#ReportDropdown').click()
    cy.get('[href="#/tax"]').click()
    
    cy.wait(4000)

     // 5) Tax P&L - Selecting - Equity
    cy.get('#ReportDropdown').click()
    cy.get('[href="#/tax"]').click()
     cy.wait(4000)

     //Select FY Year
     cy.get('span.k-input-value-text').eq(1).click({ force: true })
     .type("{downArrow}{Enter}")
     cy.wait(4000)

    //  cy.get('.segment.ng-star-inserted > .ng-untouched').type('WA603')
    //  cy.wait(3000)

     //Click on view
     cy.get('.btn').click()
     cy.wait(25000)


     cy.get('i.fa-cloud-download').eq(0).click({ force: true })
     cy.wait(4000)

     //Selecting Segmet - NSE_FNO
    cy.get('span.k-input-value-text').eq(0).click({ force: true })
    .type("{downArrow}{Enter}")
    cy.wait(5000)

    //Download 
    cy.get('.btn').click({ force: true })
    cy.wait(4000)

    //Select Segment - CURRENCY
    cy.get('span.k-input-inner').eq(0).click({ force: true })
    //.type("{downArrow}{Enter}")
    cy.wait(5000)

    //Download 
    cy.get('.btn').click({ force: true })
    cy.wait(4000)


    //Select Segment - MCX
    cy.get('span.k-input-value-text').eq(0).click({ force: true })
    // .type("{downArrow}{Enter}")
    cy.wait(5000)

    //Download 
    cy.get('.btn').click({ force: true })
    cy.wait(4000)



})
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

    //Enter Pin
    cy.wait(1000);
    cy.get('[formcontrolname="otp1"]').type('0')
    cy.get('[formcontrolname="otp2"]').type('0')
    cy.get('[formcontrolname="otp3"]').type('0')
    cy.get('[formcontrolname="otp4"]').type('0')
    // cy.get('.six_digit_pin_wrap').invoke('val').then((otp) => {
    //     // 0000
    // });
    cy.wait(4000)

   //Click on form
   cy.get('#AddNomineeDetail > .modal-dialog > .modal-content > .modal-body > .close').click({ force: true })
   cy.wait(4000);

    // click on Reports
    cy.get('#ReportDropdown').click({ force: true })
    cy.get('[href="#/ledger"]').click()
    cy.wait(4000)

    // 1.) Ledger - All 
     //cy.get('[href="#/ledger"]').click()
    //cy.wait(3000)

    
    cy.get('kendo-dropdownlist[name="calendar"] span').eq(1).click()
    .type("{downArrow}{downArrow}{downArrow}{Enter}")
    cy.wait(4000)

    //Click on view 
    cy.get('.mt-2 > .btn').click()
    cy.wait(5000)

    //Grid
    // cy.get('.k-grid-content').click()
    // cy.wait(3000)

    //Downloads
    cy.get('.btn > img').click()
    cy.wait(4000)

    // Send Email 
    cy.get('.modal-footer > :nth-child(1)').click()
    cy.wait(4000)

    // Download - PDF 
    cy.get('#pdf').click()
    cy.wait(4000)

    // Download 
    cy.get('.modal-footer > :nth-child(2)').click()
    cy.wait(4000)


    //Contract Bills

    cy.get('#bills').click()
    cy.wait(3000)

     // Download - PDF 
     cy.get('#pdf').click()
     cy.wait(4000)
 
     // Download 
     cy.get('.modal-footer > :nth-child(2)').click()
     cy.wait(4000)


    //Close
    cy.get('.btn-close').click()
    cy.wait(3000)


    //2.)SELECT- EQUITY 
    cy.get('span.k-input-value-text').eq(0).click()
    .type("{downArrow}{downArrow}{Enter}")
    cy.wait(3000)


    cy.get('kendo-dropdownlist[name="calendar"] span').eq(1).click()
    .type("{downArrow}{downArrow}{downArrow}{Enter}")
    cy.wait(4000)

    //Click on view 
    cy.get('.mt-2 > .btn').click()
    cy.wait(5000)


    //Ledger 
    //Downloads
    cy.get('.btn > img').click()
    cy.wait(4000)

    // Send Email 
    cy.get('.modal-footer > :nth-child(1)').click()
    cy.wait(4000)

    // Download - PDF 
    cy.get('#pdf').click()
    cy.wait(4000)

    // Download 
    cy.get('.modal-footer > :nth-child(2)').click()
    cy.wait(4000)

    //Contract Bills

    cy.get('#bills').click()
    cy.wait(3000)

     // Download - PDF 
     cy.get('#pdf').click()
     cy.wait(4000)
 
     // Download 
     cy.get('.modal-footer > :nth-child(2)').click()
     cy.wait(4000)
 
    //Close
    cy.get('.btn-close').click()
    cy.wait(3000)




    //3.) SELECT - FUTURE_OPTION
    cy.get('span.k-input-value-text').eq(0).click()
    .type("{downArrow}{Enter}")
    cy.wait(3000)


    // Selecting FINANCIAL YEAR.
    cy.get('kendo-dropdownlist[name="calendar"] span').eq(1).click()
    .type("{downArrow}{downArrow}{downArrow}{Enter}")
    cy.wait(4000)

    //Click on view 
    cy.get('.mt-2 > .btn').click()
    cy.wait(5000)


    //Ledger 
    //Downloads
    cy.get('.btn > img').click()
    cy.wait(4000)

    // Send Email 
    cy.get('.modal-footer > :nth-child(1)').click()
    cy.wait(4000)

    // Download - PDF 
    cy.get('#pdf').click()
    cy.wait(4000)

    // Download 
    cy.get('.modal-footer > :nth-child(2)').click()
    cy.wait(4000)

    //Contract Bills

    cy.get('#bills').click()
    cy.wait(3000)

     // Download - PDF 
     cy.get('#pdf').click()
     cy.wait(4000)
 
     // Download 
     cy.get('.modal-footer > :nth-child(2)').click()
     cy.wait(4000)
 
    //Close
    cy.get('.btn-close').click({ force: true })
    cy.wait(3000)


   //4.) SELECT - CURRENCY 

   cy.get('span.k-input-value-text').eq(0).click()
    .type("{downArrow}{Enter}")
    cy.wait(3000)


    // Selecting FINANCIAL YEAR.
    cy.get('kendo-dropdownlist[name="calendar"] span').eq(1).click()
    .type("{downArrow}{downArrow}{downArrow}{Enter}")
    cy.wait(4000)

    //Click on view 
    cy.get('.mt-2 > .btn').click()
    cy.wait(5000)


    //Ledger 
    //Downloads
    cy.get('.btn > img').click()
    cy.wait(4000)

    // Send Email 
    cy.get('.modal-footer > :nth-child(1)').click()
    cy.wait(4000)

    // Download - PDF 
    cy.get('#pdf').click()
    cy.wait(4000)

    // Download 
    cy.get('.modal-footer > :nth-child(2)').click()
    cy.wait(4000)

    //Contract Bills

    cy.get('#bills').click()
    cy.wait(3000)

     // Download - PDF 
     cy.get('#pdf').click()
     cy.wait(4000)
 
     // Download 
     cy.get('.modal-footer > :nth-child(2)').click()
     cy.wait(4000)
 
    //Close
    cy.get('.btn-close').click()
    cy.wait(3000)


    //5.) SELECT - COMMODITY 

    cy.get('span.k-input-value-text').eq(0).click()
    .type("{downArrow}{Enter}")
    cy.wait(3000)


    // Selecting FINANCIAL YEAR.
    cy.get('kendo-dropdownlist[name="calendar"] span').eq(1).click()
    .type("{downArrow}{downArrow}{downArrow}{Enter}")
    cy.wait(4000)

    //Click on view 
    cy.get('.mt-2 > .btn').click()
    cy.wait(5000)


    //Ledger 
    //Downloads
    cy.get('.btn > img').click()
    cy.wait(4000)

    // Send Email 
    cy.get('.modal-footer > :nth-child(1)').click()
    cy.wait(4000)

    // Download - PDF 
    cy.get('#pdf').click()
    cy.wait(4000)

    // Download 
    cy.get('.modal-footer > :nth-child(2)').click()
    cy.wait(4000)

    //Contract Bills

    cy.get('#bills').click()
    cy.wait(3000)

     // Download - PDF 
     cy.get('#pdf').click()
     cy.wait(4000)
 
     // Download 
     cy.get('.modal-footer > :nth-child(2)').click()
     cy.wait(4000)
 
    //Close
    cy.get('.btn-close').click()
    cy.wait(3000)


})


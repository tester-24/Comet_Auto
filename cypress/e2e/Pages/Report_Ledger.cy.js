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
  cy.get('[formcontrolname="otp1"]').type('1');
  cy.get('[formcontrolname="otp2"]').type('2');
  cy.get('[formcontrolname="otp3"]').type('3');
  cy.get('[formcontrolname="otp4"]').type('4');
  cy.wait(5000);
   
   //cy.get('.continue_button_wrap > p').click()
   cy.wait(8000)

    //    //Click on form
   //    cy.get('#AddNomineeDetail > .modal-dialog > .modal-content > .modal-body > .close').click({ force: true })
   //    cy.wait(4000);

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

    // //Enter Code
    // cy.get('.segment2 > .w-100').type('tb1881')
    // cy.wait(4000)

    //Click on view 
    cy.get('.mt-2 > .btn').click({ force: true })
    cy.wait(40000)

    //Downloads
    cy.get('img[src="../../../../assets/image/ledger_download.png"]').click({ force: true })
    //cy.get('.text-end > .btn').click({ force: true })
    cy.wait(5000)

    // Send Email 
    cy.get('.modal-footer > :nth-child(1)').click()
    cy.wait(4000)

    // Download - PDF 
    cy.get('#pdf').click({ force: true })
    cy.wait(4000)

    // Download 
    cy.get('.modal-footer > :nth-child(2)').click()
    cy.wait(4000)


    //Contract Bills

    cy.get('#bills').click({ force: true })
    cy.wait(3000)

     // Download - PDF 
     cy.get('.modal-footer > :nth-child(2)').click({ force: true })
     cy.wait(4000)
 
     
    //Close
    cy.get('.btn-close').click({ force: true })
    cy.wait(4000)


    //2.)SELECT- EQUITY 
    cy.get('span.k-input-value-text').eq(0).click({ force: true })
    //.type("{downArrow}{Enter}")
    cy.wait(5000)


    cy.get('kendo-dropdownlist[name="calendar"] span').eq(1).click({ force: true })
    //.type("{downArrow}{downArrow}{downArrow}{Enter}")
    cy.wait(6000)

    //  //Enter Code
    //  cy.get('.segment2 > .w-100').clear()
    //  cy.get('.segment2 > .w-100').type('WA603')

     cy.wait(4000)


    //Click on view 
    cy.get('.mt-2 > .btn').click()
    cy.wait(5000)


    //Ledger 
    //Downloads
    cy.get('.btn > img').click({ force: true })
    cy.wait(8000)

    // Send Email 
    cy.get('.modal-footer > :nth-child(1)').click({ force: true })
    cy.wait(8000)

    // Download - PDF 
    cy.get('#pdf').click()
    cy.wait(4000)

    // Download 
    cy.get('.modal-footer > :nth-child(2)').click()
    cy.wait(4000)

    //Contract Bills

    cy.get('#bills').click({ force: true })
    cy.wait(3000)

     // Download - PDF 
     cy.get('.modal-footer > :nth-child(2)').click({ force: true })
     cy.wait(4000)
 
    //Close
    cy.get('.btn-close').click({ force: true })
    cy.wait(3000)




    //3.) SELECT - FUTURE_OPTION
    cy.get('span.k-input-value-text').eq(0).click({ force: true })
    //.type("{downArrow}{Enter}")
    cy.wait(3000)


    // Selecting FINANCIAL YEAR.
    cy.get('kendo-dropdownlist[name="calendar"] span').eq(1).click({ force: true })
    //.type("{downArrow}{downArrow}{downArrow}{Enter}")
    cy.wait(4000)


    // //Enter Code
    // cy.get('.segment2 > .w-100').clear()
    // cy.get('.segment2 > .w-100').type('WA603')


    //Click on view 
    cy.get('.mt-2 > .btn').click()
    cy.wait(8000)


    //Ledger 
    //Downloads
    cy.get('.mt-2 > .btn').click({ force: true })
    cy.wait(8000)

    // Send Email 
    cy.get('.modal-footer > :nth-child(1)').click({ force: true })
    cy.wait(4000)

    // // Download - PDF 
    // cy.get('#pdf').click()
    // cy.wait(4000)

    // Download 
    cy.get('.modal-footer > :nth-child(2)').click({ force: true })
    cy.wait(4000)

    //Contract Bills

    cy.get('#bills').click({ force: true })
    cy.wait(3000)

     // Download - PDF 
     cy.get('.modal-footer > :nth-child(2)').click({ force: true })
     cy.wait(4000)
 
    
    //Close
    cy.get('.btn-close').click({ force: true })
    cy.wait(3000)


   //4.) SELECT - CURRENCY 

   cy.get('span.k-input-value-text').eq(0).click({ force: true })
    //.type("{downArrow}{Enter}")
    cy.wait(3000)


    // Selecting FINANCIAL YEAR.
    cy.get('kendo-dropdownlist[name="calendar"] span').eq(1).click({ force: true })
    .type("{downArrow}{downArrow}{downArrow}{Enter}")
    cy.wait(4000)


    //  //Enter Code
    //  cy.get('.segment2 > .w-100').clear()
    //  cy.get('.segment2 > .w-100').type('WA603')

    //Click on view 
    cy.get('.mt-2 > .btn').click({ force: true })
    cy.wait(8000)


    //Ledger 
    //Downloads
    cy.get('.text-end > .btn').click({ force: true })
    cy.wait(8000)

    // Send Email 
    cy.get('.modal-footer > :nth-child(1)').click({ force: true })
    cy.wait(4000)

    // // Download - PDF 
    // cy.get('#pdf').click({ force: true })
    // cy.wait(4000)

    // Download 
    cy.get('.modal-footer > :nth-child(2)').click({ force: true })
    cy.wait(4000)

    //Contract Bills

    cy.get('#bills').click()
    cy.wait(3000)

     // Download - PDF 
     cy.get('.modal-footer > :nth-child(2)').click({ force: true })
     cy.wait(4000)
 
 
    //Close
    cy.get('.btn-close').click({ force: true })
    cy.wait(3000)


    //5.) SELECT - COMMODITY 

    cy.get('span.k-input-value-text').eq(0).click({ force: true })
    //.type("{downArrow}{Enter}")
    cy.wait(3000)


    // Selecting FINANCIAL YEAR.
    cy.get('kendo-dropdownlist[name="calendar"] span').eq(1).click()
    .type("{downArrow}{downArrow}{downArrow}{Enter}")
    cy.wait(4000)

    // //Enter Code
    // cy.get('.segment2 > .w-100').clear()
    // cy.get('.segment2 > .w-100').type('WA603')


    //Click on view 
    cy.get('.mt-2 > .btn').click()
    cy.wait(5000)


    //Ledger 
    //Downloads
    cy.get('.btn > img').click({ force: true })
    cy.wait(6000)

    // Send Email 
    cy.get('.modal-footer > :nth-child(1)').click({ force: true })
    cy.wait(4000)

    // // Download - PDF 
    // cy.get('.modal-footer > :nth-child(2)').click({ force: true })
    // cy.wait(4000)

    //Contract Bills

    cy.get('#bills').click({ force: true })
    cy.wait(3000)

     // Download - PDF 
     cy.get('.modal-footer > :nth-child(2)').click()
     cy.wait(4000)
 
 
    //Close
    cy.get('.btn-close').click({ force: true })
    cy.wait(3000)


})


/// <reference types="cypress"/>

import { LoginPage } from "./comet_login.cy.js"
const loginPage = new LoginPage

it('Comet_Jainam', () => {
    cy.visit('https://comet.jainam.in/#/startup')
    cy.wait(3000)
    cy.get('.login-space-btn').click({force:true})

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
    // // cy.get('.six_digit_pin_wrap').invoke('val').then((otp) => {
    // //     // 0000
    // // });
    // cy.wait(4000)


    //Enter Pin
  cy.wait(1000);
  cy.get('[formcontrolname="otp1"]').type('1');
  cy.get('[formcontrolname="otp2"]').type('2');
  cy.get('[formcontrolname="otp3"]').type('3');
  cy.get('[formcontrolname="otp4"]').type('4');
  cy.wait(1000);
   
   //cy.get('.continue_button_wrap > p').click()
 //  cy.wait(3000)

//    //Click on form
//    cy.get('#AddNomineeDetail > .modal-dialog > .modal-content > .modal-body > .close').click({ force: true })
//    cy.wait(4000);


    // click on Reports
    cy.wait(2000)
    cy.get('#ReportDropdown').click({ force: true })
    cy.wait(1000)
    cy.get('[href="#/portfolio"]').click()
    cy.wait(2000)


    // // 2) Portfolio
    // cy.get('#ReportDropdown').click()
    // cy.get('[href="#/portfolio"]').click()
    // cy.wait(3000)


    //Click on My Holding
    cy.wait(2000)
    cy.get('span.k-input-value-text').eq(0)
    cy.get('span.k-input-inner span').eq(0)
    cy.get('kendo-dropdownlist[name="CategoryName"] span').eq(1)
     cy.wait(1000)

    //Click on Submit Button
    cy.get('.d-flex > .btn').click({ force: true })
   // cy.wait(30000)

    //cy.wait(3000)
    if(cy.get("table[class='k-grid-table k-table k-table-md']>tbody>tr").should('have.length.greaterThan',0))
        {
          cy.log('data found')
          // downloading Excel File 
          
        //   cy.get('[src="../../../../assets/image/icon/excel.png"]').click()
        //   cy.wait(2000)
        //   // Downloading PDF file
        //   cy.get('[src="../../../../assets/image/icon/pdf.png"]').click()    
        
       // cy.wait(10000)
        
        //Click on Download File
        cy.wait(5000)
        cy.get('[title="Download Report"] > img').click({ force: true })
        cy.wait(4000)

    //Click on Download Button
    cy.get('#DownloadModal > .modal-dialog > .modal-content > .modal-footer > :nth-child(1)').click()
    cy.wait(3000)

    //Click on CLOSE Button
    cy.get('#DownloadModal > .modal-dialog > .modal-content > .modal-header > .btn-close').click()
    cy.wait(3000)
  
        }
        else
        {
          cy.log('No data found')
        }
       // Scrolling to top
         cy.wait(2000)
         cy.scrollTo('top')


    // //Download File
    // cy.get('[data-target="#DownloadModal"]').click()
    // cy.wait(7000)

    //Click on Download File
    cy.get('[title="Download Report"] > img').click()
    cy.wait(4000)

    //Click on Download Button
    cy.get('#DownloadModal > .modal-dialog > .modal-content > .modal-footer > :nth-child(1)').click()
    cy.wait(3000)

    //Click on CLOSE Button
    cy.get('#DownloadModal > .modal-dialog > .modal-content > .modal-header > .btn-close').click()
    cy.wait(3000)

    // //Click on My Position
    // cy.get('.segment').type("{downArrow}{downArrow}{Enter}")
    // //.type("{downArrow}{downArrow}{Enter}")
    // cy.wait(4000)

    // // // //Click on SUBMIT Button
    // // //cy.get('form.ng-touched > :nth-child(2) > :nth-child(2)').click({ force: true })
    // // cy.wait(4000)

    // // if(cy.get("table[class='k-grid-table k-table k-table-md']>tbody>tr").should('have.length.greaterThan',0))
    // //   {
    // //     cy.log('data found')
    // //     // downloading Excel File 
        
    // //   //   cy.get('[src="../../../../assets/image/icon/excel.png"]').click()
    // //   //   cy.wait(2000)
    // //   //   // Downloading PDF file
    // //   //   cy.get('[src="../../../../assets/image/icon/pdf.png"]').click()    
      
    // //   cy.wait(6000)
      
     

    // //   }
    // //   else
    // //   {
    // //     cy.log('No data found')
    // //   }
    // //  // Scrolling to top
    // //    cy.wait(2000)
    // //    cy.scrollTo('top')


})

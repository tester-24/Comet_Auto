/// <reference types="cypress"/>

import { trimEnd } from "lodash"
import { LoginPage } from "./comet_login.cy.js"
const loginPage = new LoginPage

it('Comet_Jainam', () => {
    cy.visit('https://comet.jainam.in/#/startup')
    cy.wait(3000)
    cy.get('.login-space-btn').click({force:true})

    loginPage.enterUsername()
    loginPage.enterPassword()
    loginPage.clickLogin()
    //cy.wait(3000)


    //Pin Page
   // cy.get('.form_wrap').click()
    //cy.wait(2000)

    //Enter Pin
  cy.wait(2000);
  cy.get('[formcontrolname="otp1"]').type('1');
  cy.get('[formcontrolname="otp2"]').type('2');
  cy.get('[formcontrolname="otp3"]').type('3');
  cy.get('[formcontrolname="otp4"]').type('4');
 // cy.wait(8000);
   
   //cy.get('.continue_button_wrap > p').click()
   //cy.wait(8000)

    //    //Click on form
   //    cy.get('#AddNomineeDetail > .modal-dialog > .modal-content > .modal-body > .close').click({ force: true })
   //    cy.wait(4000);

    // click on Reports
    cy.wait(4000)
    cy.get('#ReportDropdown').click({ force: true })
    cy.get('[href="#/ledger"]').click()
    //cy.wait(4000)

   // // 1) Ledger - ALL
    // cy.get('[href="#/ledger"]').click()
     cy.wait(1800)

    cy.get('.mt-2 > .btn').click({ force: true })
    cy.wait(24000)  

    if(cy.get("table[class='k-grid-table k-table k-table-md']>tbody>tr").should('have.length.greaterThan',0))
      {
        cy.log('data found')
        // downloading Excel File 
        
        // Scrolling to top
        //cy.wait(2000)
        cy.scrollTo('top')
       

        //Click on Download Button
       // cy.wait(4000)
        //cy.get('.btn > img').click()
       // cy.wait(5000)

        //Send Email
       // cy.get('.modal-footer > :nth-child(1)').click()
       // cy.wait(4000)
        

        //Download - PDF/EXCEL
       // cy.get('.modal-footer > :nth-child(2)').click({force:true})
       // cy.get('#excel').click({force:true})
       // cy.get('.modal-footer > :nth-child(2)').click({force:true})
        //cy.get('#pdf').click({force:true})
       // cy.get('.modal-footer > :nth-child(2)').click({force:true})
       // cy.wait(5000)




        //Contract Bills

    // cy.get('#bills').click({ force: true })
    // cy.wait(3000)

     // Download - PDF 
    // cy.get('.modal-footer > :nth-child(2)').click({ force: true })
    // cy.wait(1800)
 
     
     //Close
   //  cy.get('.btn-close').click({ force: true })
    // cy.wait(4000)



     //EMAILS
      // Click on Contract Bills 
   // cy.get('.btn > img').click({ force: true })
   // cy.wait(4000)

    //Bills 
  //  cy.get('#bills').click({force:true})
   // cy.wait(3000)

    //Download 
   // cy.get('.modal-footer > :nth-child(2)').click({force:true})
   // cy.wait(8000)

    //Ledger 
   // cy.get('.modal-footer > :nth-child(2)').click({ force: true })
   // cy.wait(4000)

    //Downloads -- SEND EMAIL
   // cy.get('.modal-footer > :nth-child(1)').click({ force: true })
    //cy.wait(4000)

    //Click on [X]
   // cy.get('.btn-close').click({ force: true })
   // cy.wait(4000)



      // Scrolling to top
      // cy.wait(2000)
      cy.scrollTo('top')

      }
      else
      {
        cy.log('No data found')
      }
     

       // EQUITY

        //Selecting from SEGMENT - FUTURE_OPTION
        cy.wait(3000)
        cy.get('.container > form.ng-valid > :nth-child(2) > :nth-child(1)').click({force:true})
        .type("{downArrow}{downArrow}{Enter}")
        cy.wait(4000)


          //click on year
          cy.get('form.ng-valid > :nth-child(2) > :nth-child(2)').click()
              .type("{downArrow}{Enter}")
          cy.wait(2000)
         //Click on View Button
          cy.get(':nth-child(2) > :nth-child(3) > .btn').click()
          cy.wait(15000)


          if(cy.get("table[class='k-grid-table k-table k-table-md']>tbody>tr").should('have.length.greaterThan',0))
            {
              cy.log('data found')
              // downloading Excel File 
              
              // Scrolling to top
              cy.wait(2000)
              cy.scrollTo('top')
             
      
              //Click on Download Button
            //  cy.get('.btn > img').click()
              //cy.wait(5000)
      
              //Send Email
             // cy.get('.modal-footer > :nth-child(1)').click()
        //      cy.wait(4000)
              
      
              //Download - PDF/EXCEL
            //  cy.get('.modal-footer > :nth-child(2)').click({force:true})
             // cy.wait(2000)
            //  cy.get('#excel').click()
            //  cy.get('.modal-footer > :nth-child(2)').click()
            //  cy.get('#pdf').click({force:true})
            //  cy.get('.modal-footer > :nth-child(2)').click()
              //cy.wait(5000)
      
      
      
      
              //Contract Bills
      
          // cy.get('#bills').click({ force: true })
          // cy.wait(3000)
      
           // Download - PDF 
           //cy.get('.modal-footer > :nth-child(2)').click({ force: true })
          // cy.wait(4000)
       
           
           //Close
          // cy.get('.btn-close').click({ force: true })
           //cy.wait(4000)
      
      
      
           //EMAILS
          // Click on Contract Bills 
         // cy.get('.btn > img').click({ force: true })
         // cy.wait(4000)
      
          //Bills 
         // cy.get('#bills').click({ force: true })
          //cy.wait(3000)
      
          //Download 
       //   cy.get('.modal-footer > :nth-child(2)').click({ force: true })
         // cy.wait(8000)
      
          //Ledger 
         // cy.get('.modal-footer > :nth-child(2)').click({ force: true })
          //cy.wait(4000)
      
          //Downloads -- SEND EMAIL
        //  cy.get('.modal-footer > :nth-child(1)').click({ force: true })
          //cy.wait(6000)
      
          //Click on [X]
         // cy.get('.btn-close').click({ force: true })
         // cy.wait(4000)
      
      
      
            // Scrolling to top
            // cy.wait(2000)
            cy.scrollTo('top')
      
            }
            else
            {
              cy.log('No data found')
            }

    
          // FUTURE OPTION

                  //Selecting from SEGMENT - FUTURE_OPTION
                cy.get('.container > form.ng-valid > :nth-child(2) > :nth-child(1)').click()
              .type("{downArrow}{Enter}")
              cy.wait(4000)


          //click on year
          cy.get('form.ng-valid > :nth-child(2) > :nth-child(2)').click()
              .type("{downArrow}{Enter}")
          cy.wait(2000)

         //Click on View Button
          cy.get(':nth-child(2) > :nth-child(3) > .btn').click()
          cy.wait(10000)


          if(cy.get("table[class='k-grid-table k-table k-table-md']>tbody>tr").should('have.length.greaterThan',0))
            {
              cy.log('data found')
              // downloading Excel File 
              
              // Scrolling to top
              cy.wait(2000)
              cy.scrollTo('top')
             
      
              //Click on Download Button
           //   cy.get('.btn > img').click()
             // cy.wait(5000)
      
              //Send Email
            //  cy.get('.modal-footer > :nth-child(1)').click()
              //cy.wait(4000)
              
      
              //Download - PDF/EXCEL
              // cy.get('.modal-footer > :nth-child(2)').click({force:true})
              // cy.get('#excel').click({ force: true })
              // cy.get('.modal-footer > :nth-child(2)').click({force:true})
              // cy.get('#pdf').click({ force: true })
              // cy.get('.modal-footer > :nth-child(2)').click({force:true})
              // cy.wait(5000)
      
      
      
      
              //Contract Bills
      
         //  cy.get('#bills').click({ force: true })
          // cy.wait(3000)
      
           // Download - PDF 
           //cy.get('.modal-footer > :nth-child(2)').click({ force: true })
          // cy.wait(4000)
       
           
           //Close
          // cy.get('.btn-close').click({ force: true })
           //cy.wait(4000)
      
      
      
           //EMAILS
          // Click on Contract Bills 
         // cy.get('.btn > img').click({ force: true })
         // cy.wait(4000)
      
          //Bills 
         // cy.get('#bills').click({ force: true })
         // cy.wait(3000)
      
          //Download 
        //  cy.get('.modal-footer > :nth-child(2)').click({ force: true })
         // cy.wait(8000)
      
          //Ledger 
         // cy.get('.modal-footer > :nth-child(2)').click({ force: true })
         // cy.wait(4000)
      
          //Downloads -- SEND EMAIL
          //cy.get('.modal-footer > :nth-child(1)').click({ force: true })
         // cy.wait(6000)
      
          //Click on [X]
         // cy.get('.btn-close').click({ force: true })
         // cy.wait(4000)
      
      
      
            // Scrolling to top
           //  cy.wait(2000)
            cy.scrollTo('top')
      
            }
            else
            {
              cy.log('No data found')
            }





            
          // CURRENCY
          // CURRENCY

                  //Selecting from SEGMENT - FUTURE_OPTION
                  cy.get('.container > form.ng-valid > :nth-child(2) > :nth-child(1)').click({force:true})
                  .type("{downArrow}{Enter}")
                  cy.wait(4000)
    
    
              //click on year
              //cy.wait(2000)
              cy.get('form.ng-valid > :nth-child(2) > :nth-child(2)').click()
                  .type("{downArrow}{Enter}")
              cy.wait(2000)
             //Click on View Button
              cy.get(':nth-child(2) > :nth-child(3) > .btn').click()
              cy.wait(5000)
    
    
              if(cy.get("table[class='k-grid-table k-table k-table-md']>tbody>tr").should('have.length.greaterThan',0))
                 {
                   cy.log('data found')
              //     // downloading Excel File 
                  
              //     // Scrolling to top
                   cy.wait(2000)
                   cy.scrollTo('top')
                 
          
              //     //Click on Download Button
              //     cy.get('.btn > img').click()
              //     cy.wait(5000)
          
              //     //Send Email
              //     cy.get('.modal-footer > :nth-child(1)').click()
              //     cy.wait(4000)
                  
          
              //     //Download - PDF/EXCEL
              //     cy.get('.modal-footer > :nth-child(2)').click()
              //     cy.get('#excel').click()
              //     cy.get('.modal-footer > :nth-child(2)').click()
              //     cy.get('#pdf').click()
              //     cy.get('.modal-footer > :nth-child(2)').click()
              //     cy.wait(5000)
          
          
          
          
              //     //Contract Bills
          
              //  cy.get('#bills').click({ force: true })
              //  cy.wait(3000)
          
              //  // Download - PDF 
              //  cy.get('.modal-footer > :nth-child(2)').click({ force: true })
              //  cy.wait(4000)
           
               
              //  //Close
              //  cy.get('.btn-close').click({ force: true })
              //  cy.wait(4000)
          
          
          
              //  //EMAILS
              // // Click on Contract Bills 
              // cy.get('.btn > img').click({ force: true })
              // cy.wait(4000)
          
              // //Bills 
              // cy.get('#bills').click({ force: true })
              // cy.wait(3000)
          
              // //Download 
              // cy.get('.modal-footer > :nth-child(2)').click({ force: true })
              // cy.wait(8000)
          
              // //Ledger 
              // cy.get('.modal-footer > :nth-child(2)').click({ force: true })
              // cy.wait(4000)
          
              // //Downloads -- SEND EMAIL
              // cy.get('.modal-footer > :nth-child(1)').click({ force: true })
              // cy.wait(6000)
          
              // //Click on [X]
              // cy.get('.btn-close').click({ force: true })
              // cy.wait(4000)
          
          
          
              //   // Scrolling to top
              //    cy.wait(2000)
              //   cy.scrollTo('top')
          
                 }
                 else
                {
                  cy.log('No data found')
                 }
    
    



 })

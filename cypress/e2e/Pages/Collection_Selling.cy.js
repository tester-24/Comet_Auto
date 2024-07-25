/// <reference types="cypress"/>

import { LoginPage } from "./login_1.cy.js"
const loginPage = new LoginPage

it('Comet_Jainam', () => {
    cy.visit('https://comet.jainam.in/#/startup')
   // cy.wait(3000)
    cy.get('.login-space-btn').click()

    loginPage.enterUsername()
    loginPage.enterPassword()
    loginPage.clickLogin()
   
    //Pin Page
    cy.get('.form_wrap').click()
   
  //Enter Pin
  
  cy.get('[formcontrolname="otp1"]').type('1');
  cy.get('[formcontrolname="otp2"]').type('2');
  cy.get('[formcontrolname="otp3"]').type('3');
  cy.get('[formcontrolname="otp4"]').type('4');
  
  //Click on Partner
  cy.wait(3000)
  cy.get('#PartnerDropdown').click({ force: true })
 
  
  //Click on Collection
  cy.get('[href="#/collection"]').click()
  
  //Select Category
  cy.get('.k-input-value-text').click()
  cy.get('select')
 

  cy.get('.k-input-value-text').click().type("{downArrow}{Enter}")
  
   //Click on Submit Button
   cy.get('.col-md-3 > .btn').click()
 
  
  if(cy.get("table[class='k-grid-table k-table k-table-md']>tbody>tr").should('have.length.greaterThan',0))
    {
      cy.log('data found')
      // downloading Excel File
      cy.wait(5000) 
      
       //Download Excel
       cy.wait(20000)
        cy.get('.btn > .ng-star-inserted').click({ force: true })
        cy.wait(3000)
 
    }
    else
    {
      cy.log('No data found')
    }
   // Scrolling to top
     cy.wait(2000)
     cy.scrollTo('top')

})

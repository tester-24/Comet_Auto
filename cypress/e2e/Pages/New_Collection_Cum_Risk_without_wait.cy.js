/// <reference types="cypress"/>


import { date } from "assert-plus"
import { LoginPage } from "./login_1.cy.js"
import { visible } from "ansi-colors"
import { exit } from "process"
const loginPage = new LoginPage

it('Comet_Jainam', () => {
    cy.visit('https://comet.jainam.in/#/startup')
    //cy.wait(3000)
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
  
   
   
   //cy.get('.continue_button_wrap > p').click()
   //cy.wait(6000)

  //Click on Partner
  //cy.wait(3000)
  cy.get('#PartnerDropdown').click({ force: true })
 
  // tag: smoke

  //Click on Collection
  cy.get('[href="#/collection"]').click()
  

  //Select Category
  //cy.wait(1000)
  cy.get('.k-input-value-text').click()
  cy.get('select')
 

  cy.get('.k-input-value-text').click()
  .type("{downArrow}{downArrow}{Enter}")
 
   

  //Click on Submit Button
  
   cy.get('.col-md-3 > .btn').click()
  cy.
   cy.xpath('/html/body/app-root/ngx-spinner').should('exist')
   cy.xpath('/html/body/app-root/ngx-spinner').should('be.visible')
  // cy.get('[aria-label="Client Code"] > .k-cell-inner > .k-link > .k-column-title').should('not.be.visible')
   
    // Continue with the next code after data is loaded
  // cy.get("table[class='k-grid-table k-table k-table-md']>tbody>tr").should('have.length.greaterThan',1)
  
//})
//cy.wait('https://comet.jainam.in/webapi/collection/ListCollectionCumRiskDetails')
//   cy.get('.la-ball-spin-clockwise-fade').should('exist').then(() => {
//  // cy.get('.la-ball-spin-clockwise-fade').should('not.exist')
//    //cy.get(':nth-child(1) > .text-disable-drag').should('be.visible')
  // cy.get('.col-lg-1 > .btn').should('exist')
  

   cy.get('.col-lg-1 > .btn').click()

   })
  
  
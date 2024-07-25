/// <reference types="cypress"/>

import { date } from "assert-plus"
import { LoginPage } from "./login_1.cy.js"
import { visible } from "ansi-colors"
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
  cy.wait(3000)
  cy.get('#PartnerDropdown').click({ force: true })
 
  // tag: smoke

  //Click on Collection
  cy.get('[href="#/collection"]').click()
  

  //Select Category
  cy.wait(1000)
  cy.get('.k-input-value-text').click()
  cy.get('select')
 

  cy.get('.k-input-value-text').click()
  .type("{downArrow}{downArrow}{Enter}")
 
   

  //Click on Submit Button
  //cy.get('.col-md-3 > .btn').click()
  
  cy.get('.col-md-3 > .btn').click()
  cy.window().then((win) => {
    const startTime = Date.now(); // Capture start time
    //cy.wait(5000)

if (cy.get("table[class='k-grid-table k-table k-table-md']>tbody>tr").should('be.visible')); 
  {
    const endTime = Date.now(); // Capture end time
   const loadTime = endTime - startTime; // Calculate load time

   console.log(`Data load time: ${loadTime} seconds`);
   cy.log(`Data load time: ${endTime - startTime}  seconds`); 
  } 
  


  

   // Optionally, log a warning if load time exceeds a threshold
     
  // cy.window().then((win) => {
  //  const startTime = performance.now(); // Capture start time

    // Wait for the page to load (adjust timeout as needed)
    //cy.wait(1000);

    // if(cy.get("table[class='k-grid-table k-table k-table-md']>tbody>tr").should('have.length.greaterThan',0))
    // {
    //   cy.log('data found')
     
      // Downloading Excel File
  
     // cy.get('.btn > .ng-star-inserted').click()
     
   
    

    // else
    // {
    //   cy.log('No data found')
    // }
   // Scrolling to top
   
     cy.scrollTo('top')

  })
})
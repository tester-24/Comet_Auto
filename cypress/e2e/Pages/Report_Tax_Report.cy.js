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
  
     //Pin Page
   // cy.get('.form_wrap').click()
    
    //Enter Pin
   cy.wait(3000);
    cy.get('[formcontrolname="otp1"]').type('1');
    cy.get('[formcontrolname="otp2"]').type('2');
    cy.get('[formcontrolname="otp3"]').type('3');
    cy.get('[formcontrolname="otp4"]').type('4');
    
    // click on Reports
   cy.wait(4000)
    cy.get('#ReportDropdown').click({force:true})
    cy.get('[href="#/tax"]').click({force:true})
    
    // 5) Tax P&L - Selecting - Equity
    cy.get('#ReportDropdown').click()
    cy.get('[href="#/tax"]').click()
     
    //Select FY Year
     cy.get('span.k-input-value-text').eq(1).click({ force: true }).type("{downArrow}{Enter}")
     
     //Click on view
     cy.get('.btn').click()
     cy.wait(12000)
     //cy.get('i.fa-cloud-download').eq(0).click({ force: true })
   

     //Selecting Segmet - NSE_FNO
     cy.wait(1000)
    cy.get('span.k-input-value-text').eq(0).click({ force: true }).type("{downArrow}{Enter}")
    
    //Download 
    //cy.get('.btn').click({ force: true })
    
    //Select Segment - CURRENCY
    cy.get('span.k-input-inner').eq(0).click({ force: true })
    //.type("{downArrow}{Enter}")
  
    //Download 
   // cy.get('.btn').click({ force: true })
   
    //Select Segment - MCX
    cy.get('span.k-input-value-text').eq(0).click({ force: true })
    // .type("{downArrow}{Enter}")
   
    //Download 
    //cy.get('.btn').click({ force: true })
   
})
// Assignment: 2 Edit Lead
// http://leaftaps.com/opentaps/control/main			
// 1. Launch the browser
// 2. Enter the username
// 3. Enter the password
// 4. Click Login
// 5. Click CRM/SFA link
// 6. Click Leads link
// 7. Click on Create Lead
// 8. Enter company name
// 9. Enter first name
// 10.Enter last name
// 11.Click on Create Lead button  
// 12.Click Edit
// 13.Change the company name
// 14.Click Update

import { chromium, test } from "@playwright/test";

test("Login to Salesforce with valid credential and retrive the title and url",async({page})=>{
   //  const browser = await chromium.launch({headless:false,channel:"chrome"});
   //  const browserConext = await browser.newContext();
   //  const page = await browserConext.newPage();
    await page.goto("http://leaftaps.com/opentaps/control/main");

    await page.locator("#username").fill("Demosalesmanager");
    
    await page.fill("#password","crmsfa");
    
    await page.click("input.decorativeSubmit");
    
    await page.waitForTimeout(3000);
    
    const pageTitle = await page.title();
    
    const url = page.url();
    
    console.log(`Page Title is ${pageTitle} and Page URL is ${url}`);
    
    //Enter FirstName
    const firstName = "Nandhini";

    //Enter CompanyName
    const companyName = "HCL";
    await page.click("//a/img");

    //Click on Create Lead
    await page.click("//a[text()='Create Lead']");
    
    await page.fill("#createLeadForm_companyName",companyName);
    
    await page.fill("#createLeadForm_firstName",firstName);
    
    await page.fill("#createLeadForm_lastName","Kannan");
    
    //Click on Submit button
    await page.click("//input[@name='submitButton']");
    
    await page.waitForLoadState("load");
    
    const result = await page.locator("//div[text()='View Lead']").isVisible();
    
    if(result){
        console.log("Lead Created successfully");
     }else{
        console.log("Lead Creation Fails");
     }
    
    // Click on Edit button and Edit the company name
     await page.click("//a[text()='Edit']");
      const EditedCompanyName = "HCLTech";
     
      const UpdatedCompanyName = page.locator("#updateLeadForm_companyName");

      await UpdatedCompanyName.clear();
      UpdatedCompanyName.fill(EditedCompanyName);
      await page.locator(".smallSubmit").nth(0).click();
     
      const NewCompanyName = page.locator("#viewLead_companyName_sp");
     
      const actualCompanyName = await NewCompanyName.innerText();
     
     console.log("Actual Company Name is : "+actualCompanyName);
     
     if(actualCompanyName.includes(EditedCompanyName))
     {
        console.log(actualCompanyName  + "Test Case is Passed");
      
      }
      else
      {
        console.log(NewCompanyName + "Test Case is Failed");
        
      }
  
      
 })
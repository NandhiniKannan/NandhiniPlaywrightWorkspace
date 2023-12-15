/*
Assignment: 3 Create Individuals
Test Steps: 
1. Login to https://login.salesforce.com
2. Click on the toggle menu button from the left corner
3. Click View All and click Individuals from App Launcher
4. Click on the Dropdown icon in the Individuals tab
5. Click on New Individual
6. Enter the Last Name
7. Click save and verify Individuals Name*/
   
   import { chromium, expect, test } from "@playwright/test";

test("Login to Salesforce with valid credential and Create Lead",async()=>{
    const browser = await chromium.launch({headless:false,channel:"chrome"});
    const browserConext = await browser.newContext();
    const page = await browserConext.newPage();

    await page.goto("https://login.salesforce.com/");
    
    await page.locator("#username").fill("nandhinikannan@testleaf.com");
    
    await page.fill("#password","Nandhini@123");
    
    await page.click("#Login");
    
    await page.waitForLoadState('load');
    const pageTitle = await page.title();
    const url = page.url();
    console.log(`Page Title is ${pageTitle} and Page URL is ${url}`);
    
    await page.waitForSelector("div.slds-icon-waffle");
    
    await page.waitForTimeout(3000);
    
    //Click App Menu icon
    await page.click("div.slds-icon-waffle");
    
    //Click on View All Link
    await page.click("text=View All");
    await page.waitForTimeout(3000);
    
    //Click on Individuals link
    await page.click("//p[text()='Individuals']");
    await page.waitForTimeout(3000);

    //Click on New and Create a New Individual
    await page.waitForSelector("(//span[text()='Individuals'][1])");
    await page.getByTitle('New', {exact:true}).last().click();
    await page.waitForLoadState('load');
    
    //select Salutation dropdown
    await page.locator("(//div/a[text()='--None--'])[1]").click();
    await page.waitForLoadState('load');
    await page.locator("//a[text()='Mrs.']").click();

   //Enter Last Name
   const lastName = "Nandhini R Kannan"
   await page.locator("//input[@placeholder='Last Name']").fill(lastName);

   //Click Save button
   await page.getByTitle('Save', {exact:true}).last().click();
    
   await page.waitForLoadState('load');

   //Verify Lastname
   const individualSuccessMsg = await page.innerText("//span[@class='toastMessage slds-text-heading--small forceActionsText']");//Capturing Toast Message
   console.log("Verified Text Message : " + individualSuccessMsg); //Printing Toast Message
   // const verifyLastName = await page.locator("(//span[@class='uiOutputText'])[8]").isVisible();
   // expect(lastName).toEqual(verifyLastName);

})

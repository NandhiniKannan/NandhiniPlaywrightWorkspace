// Assignment: 4 Edit Individuals
// Test Steps:
// 1. Login to https://login.salesforce.com
// 2. Click on the toggle menu button from the left corner
// 3. Click View All and click Individuals from App Launcher 
// 4. Click on the Individuals tab 
// 5. Search the Individuals last name
// 6. Click on the Dropdown icon and Select Edit
// 7. Select Salutation as 'Mr'
// 8. Now enter the first name
// 9. Click on Save and Verify the first name

import { chromium, expect, test } from "@playwright/test";

test("Login to Salesforce with valid credential and Create Lead",async()=>{
const browser = await chromium.launch({headless:false,channel:"chrome"});
const browserConext = await browser.newContext();
const page = await browserConext.newPage();

// 1. Login to https://login.salesforce.com
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
    
// 2. Click on the toggle menu button from the left corner
await page.click("div.slds-icon-waffle");
    
// 3. Click View All and click Individuals from App Launcher 
await page.click("text=View All");
await page.waitForTimeout(3000);
    
// 4. Click on the Individuals tab 
await page.click("//p[text()='Individuals']");
await page.waitForTimeout(3000);

// 5. Search the Individuals last name
const getSearchText = await page.getByPlaceholder("Search this list...");
await getSearchText.fill("Nandhini");
await getSearchText.press('Enter');
console.log (getSearchText);

//click on first record
await page.locator("//span[@class='slds-grid slds-grid--align-spread forceInlineEditCell']/a").first().click();

// 6. Click on the Dropdown icon and Select Edit
await page.getByTitle('Edit', {exact:true}).last().click();

// 7. Select Salutation as 'Mr'
//await page.locator("(//div/a[text()='Mr.'])").click();

await page.locator("//a[@title='Mr.']").click();
await page.waitForLoadState('load');

// 8. Now enter the first name
//await page.locator("//input[@placeholder='First Name']").clear();
await page.locator("//input[@placeholder='First Name']").fill("John");

//Editing Last Name
await page.locator("//input[@placeholder='Last Name']").clear();
await page.locator("//input[@placeholder='Last Name']").fill("Smith");

// 9. Click on Save and Verify the first name
await page.getByTitle('Save', {exact:true}).last().click();
await page.waitForLoadState('load');
const editIndividualsmsg = await page.innerText("//span[@class='toastMessage slds-text-heading--small forceActionsText']")
console.log(editIndividualsmsg);

})
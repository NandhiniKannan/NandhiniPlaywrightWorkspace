// Assignment: 1
// 1. Login to https://login.salesforce.com
// 2. Click on toggle menu button from the left corner
// 3. Click view All and click Sales from App Launcher
// 4. Click on Leads tab 
// 5. Click on New button
// 6. Select Salutation dropdown
// 7. Enter the Last Name
// 8. Enter the CompanyName 
// 9. Click Save and Verify Leads name created


import { chromium, test } from "@playwright/test";

test("To launch a browser", async () => {

//To launch the browser --> creates a new browser instance
const browser = await chromium.launch({headless: false, channel: 'chrome'});

//Get the new browser context
const browserContext = await browser.newContext();

//Get a new page
const page = await browserContext.newPage();

//Load the Url
const getURL = await page.goto("https://login.salesforce.com/");
console.log ("Given URL is :" + getURL);

await page.waitForTimeout(8000);

// Enter Username
await page.locator('#username').fill('nandhinikannan@testleaf.com')

//Enter Password
await page.locator('#password').fill('Nandhini@123');

//Click on login Button
await page.locator('#Login').click();

await page.waitForLoadState("load"); // wait for the document to get loaded

//Click on Left side menu
   await page.click("div.slds-icon-waffle");

   await page.waitForLoadState('load');

//Click on View All Link
await page.click("//button[text()='View All']");
await page.waitForLoadState('load');

//Click on Sales Link
await page.click ("//p[text()='Sales']");
await page.waitForLoadState('load');

//await page.waitForTimeout(2000);

//Click on Leads Tab
//await page.waitForSelector("//a/span[text()='Leads']");
await page.locator("//a[@title='Leads']").click();

await page.waitForLoadState('load');

//await page.waitForTimeout(1500);

//Click on New button
await page.getByRole('button', {name:'New'}).click();

await page.waitForLoadState('load');

//select Salutation dropdown
await page.click("button[name='salutation']");

//await page.waitForTimeout(1200);

await page.waitForSelector("//span[text()='Mrs.']");
await page.click("//span[text()='Mrs.']");

//Enter LastName
await page.fill("input[name='lastName']","NandhiniKannan");

//Enter CompanyName
await page.fill("input[name='Company']","HCLTech");

//await page.waitForTimeout(1500);

//Click on Save Button
await page.click("//button[text()='Save']");

await page.waitForTimeout(5000);

})

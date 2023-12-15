// * Test Steps:
// 1. Login to https://login.salesforce.com
// 2. Click on toggle menu button from the left corner
// 3. Click view All and click Sales from App Launcher
// 4. Click on Accounts tab 
// 5. Click on New button
// 6. Enter 'your name' as account name
// 7. Select Ownership as Public                                               
// 8. Click save and verify Account name 

import { chromium, expect, test } from "@playwright/test";

test("To launch a browser", async ({ page }) => {

// 1. Login to https://login.salesforce.com

const getURL = await page.goto("https://login.salesforce.com/");
console.log("Given URL is :" + getURL);
await page.waitForTimeout(3000);

await page.locator('#username').fill('nandhinikannan@testleaf.com') //Enter Username
await page.locator('#password').fill('Nandhini@123'); //Enter Password
await page.locator('#Login').click(); //Click on login Button
await page.waitForLoadState("load"); // wait for the document to get loaded

//-------------------------------------------------------------------------------//

// 2. Click on toggle menu button from the left corner

await page.locator("div.slds-icon-waffle").click();
await page.waitForLoadState('load');

//--------------------------------------------------------------------------------//

// 3. Click view All and click Sales from App Launcher

await page.locator("//button[text()='View All']").click();
await page.locator("//input[@placeholder='Search apps or items...']").fill("Accounts"); //Enter text in Search box
await page.locator("//p[@class='slds-truncate']/mark").click(); //Clicking on that seaarch result

//---------------------------------------------------------------------------------//

// 4. Click on Accounts tab 
await page.locator("//a[@title='Accounts']/span").click();

//-----------------------------------------------------------------------------------//

// 5. Click on New button
await page.locator("//div[@title='New']").first().click();

//------------------------------------------------------------------------------------//

// 6. Enter 'your name' as account name
await page.locator("//input[@name='Name']").fill("Nandhini Kannan");

//-------------------------------------------------------------------------------------//

// 7. Select Ownership as Public 
await page.locator("(//span[text()='--None--'])[3]").click();
await page.locator("//span[text()='Public']").click();

//---------------------------------------------------------------------------------------//

// 8. Click save and verify Account name 

await page.locator("//button[text()='Save']").click();
const verifySuccessMsg =  await page.innerText("//span[@class='toastMessage slds-text-heading--small forceActionsText']");
//verifySuccessMsg.isVisible();
console.log("Account was Created Successfully : " + verifySuccessMsg);

//-----------------------------------------------------------------------------------------//

})
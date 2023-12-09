// Assignment - 2 (Create a new Lead)

// 1) Open http://leaftaps.com/opentaps/control/main
// 2) Perform the following functions

//     a) Login (Enter username, password, Click Login)
//     b) Click CRM/SFA Link (Locator for Link: text='Text of the Link') 
//        await page.locator("text=CRM/SFA').click();
//     c) Click the Leads Link (See the Tab)
//     d) Click Create Lead Link (See Left Menu)
//     e) Enter the company name, first name and last name (use id and pur your own data)
//     f) Click Create Lead Button 


import { chromium, test } from "@playwright/test";

test("To launch a browser", async () => {

//To launch the browser --> creates a new browser instance
const browser = await chromium.launch({headless: false, channel: 'chrome'});

//Get the new browser context
const browserContext = await browser.newContext();

//Get a new page
const page = await browserContext.newPage();

//Load the Url
const getURL = await page.goto("http://leaftaps.com/opentaps/control/main");
console.log ("Given URL is :" + getURL);

await page.waitForTimeout(3000);

// Enter Username
await page.locator('#username').fill('Demosalesmanager');

//Enter Password
await page.locator('#password').fill('crmsfa');

//Click on login Button
await page.locator('.decorativeSubmit').click();

//click on crmsfa link
await page.locator('text=CRM/SFA').click();

//click on Leads link
await page.getByRole('link', {name:'Leads'}).click();

//Click Create Lead
await page.click("text=Create Lead");

//Enter the company name
await page.fill("#createLeadForm_companyName", "HCLTech");

//Enter first name
await page.fill("#createLeadForm_firstName", "Nandhini");

//Enter the surname
await page.fill("#createLeadForm_lastName", "Kannan");


//click on Create Lead button
await page.click("input[type='submit']");

// //Print the title
// const title = await page.title();
// console.log ("Page Title is :" + title);


})

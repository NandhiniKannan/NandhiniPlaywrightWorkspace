// Assignment - 1 (Login to Salesforce)

// 1) Open Salesforce Login Page https://login.salesforce.com
// 2) Enter the username
// 3) Enter the password
// 4) Click Login
// 5) Print the title and url

import { chromium, test } from "@playwright/test";

test("To launch a browser", async () => {

//To launch the browser --> creates a new browser instance
const browser = await chromium.launch({headless: false, channel: "chrome"});

//Get the new browser context
const browserContext = await browser.newContext();

//Get a new page
const page = await browserContext.newPage();

//Load the Url
const getURL = await page.goto("https://login.salesforce.com/");
console.log ("Given URL is :" + getURL);

await page.waitForTimeout(3000);

// Enter Username
await page.locator('#username').fill('nandhinikannan@testleaf.com')

//Enter Password
await page.locator('#password').fill('Nandhini@123');

//Click on login Button
await page.locator('#Login').click();

await page.waitForLoadState("load"); // wait for the document to get loaded

//Print the title
const title = await page.title();
console.log ("Page Title is :" + title);


})

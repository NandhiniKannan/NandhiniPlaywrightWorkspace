// Test Case Name: Creating dashboard UI and GET and DELETE that via API
// Module Name: Dashboard
// Objective: To create a new dashboard and verify its name in Salesforce.
// User Credentials:
// Username: nandhinikannan@testleaf.com
// Password: Nandhini@123

//.............. Steps & Expected Results ..................//

import { chromium, expect, test } from "@playwright/test";
import { verify } from "crypto";
import { getAccessToken } from "./TC001_authHelper.spec"; // getting access token

let accessToken:string; // global declaration 
let inst_url:string; // global decalration
const dashboardURL = "https://hcltech-1a2-dev-ed.develop.my.salesforce.com/services/data/v59.0/sobjects/Dashboard";
const inputDashboardName = "Salesforce Automation by Jones J";
let getID : any;


test('Use access toke in test from the function',async () => {


    const authData = await getAccessToken();
    accessToken = authData.accessToken;
    inst_url = authData.inst_url;
    
    }) // Calling the access token function

test("To launch a browser", async ({ page }) => {

    
//------------------------------------------------------------------------------------------//

// 1. Step: Login to Salesforce
// Expected Result: Successful login to the Salesforce homepage.

const getURL = await page.goto("https://login.salesforce.com/");
console.log("Given URL is :" + getURL);
await page.waitForTimeout(3000);
await page.locator('#username').fill('nandhinikannan@testleaf.com') //Enter Username
await page.locator('#password').fill('Nandhini@123'); //Enter Password
await page.locator('#Login').click(); //Click on login Button
await page.waitForLoadState("load"); // wait for the document to get loaded

//---------------------------------------------------------------------------------------------//

// 2. Step: Access the Toggle Menu - 
//Action: Click on the toggle menu button ‘App Launcher’ in the top left corner. - 
// Expected Result: The main navigation menu expands, displaying various options.
await page.locator("div.slds-icon-waffle").click();
await page.waitForLoadState('load');

//-----------------------------------------------------------------------------------------------//

// 3. Step: Navigate to Dashboards - 
//Action: Click "View All" and type "Dashboards" from the App Launcher. - 
// Expected Result: The Dashboards link is displayed

await page.locator("//button[text()='View All']").click();
await page.locator("//input[@placeholder='Search apps or items...']").fill("Dashboards"); //Enter text in Search box

//------------------------------------------------------------------------------------------------//

// 4. Step: Click on the ‘Dashboards link - 
// Expected Result: The Dashboards page is displayed, showing existing dashboards.
await page.locator("//p[@class='slds-truncate']/mark").click(); //Clicking on that seaarch result
    
//---------------------------------------------------------------------------------------------------//

// 5. Step: Create New Dashboard - 
//Action: Click on the "New Dashboard" option. - 
// Expected Result: A new window or tab opens to create a new dashboard.

await page.locator("//div[@title='New Dashboard']").click();

//-------------------------------------------------------------------------------------------------------//

// 6. Step: Enter the Dashboard Name and Create - 
//Action: Enter Name as 'Salesforce Automation by [Your Name]' and click on "Create." - 
// Expected Result: A new dashboard is created with the specified name, and you are redirected to the dashboard editing page.

const dashboardFrame = page.frameLocator("[title='dashboard']"); // handling frame

const givenDashboardName = dashboardFrame.locator('#dashboardNameInput');
await givenDashboardName.fill(inputDashboardName); // Fill Dashboard name
await dashboardFrame.locator('#submitBtn').click(); //Click on Create button

//--------------------------------------------------------------------------------------------------------------//

//7. Save and Verify Dashboard Name - 
//Action: Click on "Save." - 
//Expected Result: The dashboard is successfully saved. The dashboard name 'Salesforce Automation by [Your Name]' is 
//visible on the top or in the dashboard list, confirming that the dashboard has been named correctly. 
//Ensure to replace '[Your Name]' with your actual name in the dashboard title.

const dashboardName = await dashboardFrame.locator("//div[contains(@class,'slds-has-divider_bottom')]/span").innerText();
console.log("Dashboard Created Successfully : " + dashboardName);
expect(inputDashboardName).toContain("Salesforce Automation by Jones J"); // Verify given name and created dashboard name
console.log ("dashboardName Is Equal To givenDashboardName");

//--------------------------------------------------------------------------------------------------------------------//
})

//Steps to get the created dashboard via Postman 
// 1. Open Postman / API
// 2. Create a GET call using the endpoint Url: https://your-sf-instance/services/data/v59.0/sobjects/Dashboard 
// 3. You will receive a response containing the Dashboard name and ID

test("Test to GET a created Dashboard",async ({request}) => {

const dashBoard = await request.get(dashboardURL,
    {
    headers: {
    "Authorization": `Bearer ${accessToken}`,
    "Connection": "keep-alive"
    },
   })
    const dBoard_response = await dashBoard.json();
 
    getID = dBoard_response.recentItems[0].Id;
    console.log (getID);
   // console.log(dBoard_response);
    console.log(`Status code is ${dashBoard.status()}`);
    expect(dashBoard.status()).toBe(200);
    
    })
//--------------------------------------------------------------------------------------------------------------------//

// Steps to delete the created dashboard 
// 1. Delete the dashboard using the ID received in the response 
// Method: DELETE Endpoint url: https://your-sf-instance/services/data/v59.0/sobjects/Dashboard/id 
// 2. Verify the dashboard has been successfully deleted using the status code

test("Test to DELETE a created Dashboard",async ({request}) => {

const dashBoard = await request.delete(`https://hcltech-1a2-dev-ed.develop.my.salesforce.com/services/data/v59.0/sobjects/Dashboard/${getID}`,
{
headers: 
{
"Authorization": `Bearer ${accessToken}`,
"Connection": "keep-alive"
}
})
           
console.log(`Status code is ${dashBoard.status()}`);
expect(dashBoard.status()).toBe(204);
            
})


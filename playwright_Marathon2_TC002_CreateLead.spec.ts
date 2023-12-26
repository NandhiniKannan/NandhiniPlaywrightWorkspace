// Test Case Name: Creating LEADS and UPDATE in API and DELETING in UI
// Module Name: Lead
// Objective: To create a new lead and update and Delete it.
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
let responseID : any;

test('Use access toke in test from the function',async () => {


    const authData = await getAccessToken();
    accessToken = authData.accessToken;
    inst_url = authData.inst_url;
    
    }) // Calling the access token function
//------------------------------------------------------------------------------------------//

// Steps to create a New Lead using API 
// 1. Open Postman 
// 2. Create a new lead using the POST method Endpoint url: https://your-sf-instance/services/data/v59.0/sobjects/Lead 
// 3. Create a JSON data in the body for Salutation, Last Name and Company 
// 4. Get the status code for the successful creation of the lead

// Lead Created using postman and respose code:
// {
//     "id": "00Q5j00000XQazPEAT",
//     "success": true,
//     "errors": []
// }

// Response : 201 Created

//=============================***** CREATE AND UPDATE USING API ******========================//
//--------------------------------Create Lead using API--------------------------------------//

test("Test to create a new lead",async ({request}) => {
  
    let l_url = `${inst_url}//services/data/v59.0/sobjects/Lead/`;
    const leadd = await request.post(l_url,
    {
    headers: {
    "Authorization": `Bearer ${accessToken}`,
    "Connection": "keep-alive"
    },
    data:{
   "Salutation" : "Mr.",
   "Company" : "Infosys PVT LTD",
   "LastName" : "jackk"

    }
    })
    const le_response = await leadd.json();
    console.log(le_response);
    console.log(`Status code is ${leadd.status()}`);
    responseID = le_response.id;
    console.log(`Lead ID is  ${le_response.id}`);
    expect(leadd.status()).toBe(201);
    //console.log(L_ID);
    })
//---------------------------------------------------------------------------------------------------------//

// Steps to Update the lead using API 
//1. Update the created record with the first name and title 
// Method: PATCH Endpoint url: https://your-sf-instance/services/data/v59.0/sobjects/Lead/id

test("Update the created Lead",async ({request}) => {

    
    let leadURL = `${inst_url}/services/data/v59.0/sobjects/Lead/${responseID}`;
    const update = await request.patch(leadURL,
    {
    headers: {
    "Authorization": `Bearer ${accessToken}`,
    "Connection": "keep-alive"
    },
    data:{
    "Company": "HCLTECH PVT LTD",
    }
    })
    
    // const lead_response = await update.json();
    // getID = lead_response.recentItems[0].Id;
    // console.log (getID);
    const statusCode = update.status();
    console.log(`Status code is ${update.status()}`);
    expect(statusCode).toBe(204);
    
    })

    test("To launch a browser", async ({ page }) => {

//-------------------****** STEPS TO DELETE [UI TESTING] ******-------------------------------------//

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

// 4. Click Leads - 
//Action: Click on the ‘Leads’ link - 
//Expected Result: The Leads page is displayed, showing existing leads.

await page.locator("//button[text()='View All']").click();
await page.locator("//input[@placeholder='Search apps or items...']").fill("Leads"); //Enter text in Search box
await page.locator("//p[@class='slds-truncate']/mark").click(); //Clicking on that seaarch result
//--------------------------------------------------------------------------------------------------------------------//

//5. Enter the Last Name - 
//Action: Enter the Last name in the Search box and press Enter - 
//Expected Result: The Leads having the Last Name is displayed

const searchText = page.locator("//input[@placeholder='Search this list...']"); //click on Search text box in Leads page
await searchText.fill("jackk"); //Enter value in search box
await searchText.press('Enter'); //press Enter
await page.locator("(//a[@data-refid='recordId'])[1]").click();

//-----------------------------------------------------------------------------------------------------------------//

// 6. Verify the lead name - 
// Action: Verify the lead name displayed is the same created through API. - 
// Expected Result: The leads are successfully created and updated through API.

//======================================================================================================================//

// 7. Delete the Lead - 
// Action: Click the dropdown of the updated lead and choose ‘Delete’ option. Click the ‘Delete’ button on the popup. - 
// Expected Result: The lead is deleted when the Delete button is clicked.
await page.waitForLoadState('load');
await page.locator("(//ul[@class='slds-button-group-list']/li)[4]").click(); // Clicking dropdown to delete
await page.locator("//span[text()='Delete']").click(); // click Delete option
await page.waitForLoadState('load');
await page.locator("//button[@title='Delete']").click(); // click Delete in the popup
const toastMessage = await page.innerText('.forceToastMessage'); //Capturing Toast Message
console.log("Verified Text Message : " + toastMessage); //Printing Toast Message
//========================================================================================================================//

// 8. Verify the deleted Lead - 
// Action: Enter the deleted lead on the Search box and verify there is no lead with that name. - 
// Expected Result: The lead is deleted and ‘No records to display’ text is displayed on the page.

const searchTexts = page.locator("//input[@placeholder='Search this list...']"); //click on Search text box in Leads page
await searchTexts.fill("jackk"); //Enter value in search box
await searchTexts.press('Enter'); //press Enter
await page.locator("//span[text()='No items to display.']").isVisible(); // Verify No items to display



})


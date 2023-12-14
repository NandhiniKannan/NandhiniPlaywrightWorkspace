// Test Case Name: Verify Lead Creation and Conversion to Opportunity
// Objective: Ensure that a user can successfully create a new lead and convert that lead to an opportunity.
// User Credentials:
// Username: nandhinikannan@testleaf.com
// Password: Nandhini@123

//.............. Steps & Expected Results ..................//

import { chromium, expect, test } from "@playwright/test";

test("To launch a browser", async ({ page }) => {

    //------------------------------------------------------------------------------------------//

    // 1. Step: Launch the browser (Chrome / Edge / Firefox / Safari).
    // Expected Result: User should see the respective browser getting launched.

    // const browser = await chromium.launch({headless: false, channel: 'chrome'});
    // const browserContext = await browser.newContext(); //Get the new browser context
    // const page = await browserContext.newPage(); //Get a new page

    //------------------------------------------------------------------------------------------//

    // 2. Step: Load the specified URL (https://login.salesforce.com/).
    // Expected Result: The Salesforce application’s login window should appear

    const getURL = await page.goto("https://login.salesforce.com/");
    console.log("Given URL is :" + getURL);
    await page.waitForTimeout(3000);

    //-------------------------------------------------------------------------------------------//

    // 3. Step: Enter the Username, Password and click on the Login button.
    // Expected Result: The user should be logged into Salesforce CRM//

    await page.locator('#username').fill('ranjini.r@testleaf.com') //Enter Username
    await page.locator('#password').fill('Testleaf$1234'); //Enter Password
    await page.locator('#Login').click(); //Click on login Button
    await page.waitForLoadState("load"); // wait for the document to get loaded

    //---------------------------------------------------------------------------------------------//

    // 4. Step: Click on the App Launcher toggle button.
    // Expected Result: A list of apps should appear

    await page.locator("div.slds-icon-waffle").click();
    await page.waitForLoadState('load');

    //-----------------------------------------------------------------------------------------------//

    // 5. Step: Click on the View All link.
    // Expected Result: The link should direct the user to the App Launcher pop up window.

    await page.locator("//button[text()='View All']").click();
    //await page.waitForLoadState('load');

    //------------------------------------------------------------------------------------------------//

    // 6. Step: Type ‘Marketing’ in the search box and click on the Marketing link.
    // Expected Result: The link should direct the user to Marketing dashboard page. 

    await page.locator("//input[@placeholder='Search apps or items...']").fill("Marketing"); //Enter text in Search box
    await page.locator("//p[@class='slds-truncate']/mark").click(); //Clicking on that seaarch result
    
    //---------------------------------------------------------------------------------------------------//

    // 7. Step: Navigate to the Leads tab from the Marketing dashboard.
    // Expected Result: User should see a list of existing leads (if any) and options to create a new lead.

    await page.locator("//a[@title='Leads']").click(); //Click on Leads Tab
    await page.waitForLoadState('load');

    //-----------------------------------------------------------------------------------------------------//

    // 8. Step: Click on the New button to create a lead.
    // Expected Result: A form to input details for the new lead should appear.

    await page.getByRole('button', { name: 'New' }).click();
    await page.waitForLoadState('load');

    //----------------------------------------------------------------------------------------------------------//

    // 9. Step: Fill in all the mandatory fields (Salutation, First Name, Last Name, Company) with valid data.
    // Expected Result: All details should be filled in without any errors.


    await page.click("button[name='salutation']"); //Click Salutation dropdown
    await page.waitForSelector("//span[text()='Mr.']");  // Wait for options to be displayed
    await page.click("//span[text()='Mr.']"); //Select Values from dropdown
    await page.fill("input[name='firstName']", "Kumar"); //Enter FirstName
    await page.fill("input[name='lastName']", "R"); //Enter LastName
    await page.fill("input[name='Company']", "Tech Mahindra"); //Enter CompanyName

    //---------------------------------------------------------------------------------------------------------------//

    // 10. Step: Click on the Save button.
    // Expected Result: A new lead should be created and user should be redirected to the detailed
    // view of the newly created lead. A confirmation message should also be displayed and verified

    await page.locator("//button[text()='Save']").click(); //Click on Save button
    const toastMessage = await page.innerText('.forceToastMessage'); //Capturing Toast Message
    console.log("Verified Text Message : " + toastMessage); //Printing Toast Message

    //-----------------------------------------------------------------------------------------------------------------//

    // 11. Step: In the newly created Lead page, locate the dropdown near Submit for Approval button and click on the Convert link.
    // Expected Result: The Convert link should be visible and clickable and a new dialog should appear asking for details about converting the lead to an opportunity, contact, and an account.

    await page.locator("(//span[text()='Show more actions'])[2]").click(); // click on show more action dropdown
    await page.locator("//span[text()='Convert']").click(); //Click on Convert option

    //-----------------------------------------------------------------------------------------------------------------//

    // 12. Step: Click on the Opportunity Name input field, clear and enter a new opportunity name.
    // Expected Result: The entered value should appear.

    await page.locator("//button[@class='slds-button transparentButton']").last().click(); // clicking on Opportunity Text box

    const opportunityTextbox = page.locator("(//input[@class=' input'])[4]"); //After clicking on it changing to input field

    const editOpportunityName = "Avlon"; // entering new opportunity value

    const NewOpportunityName = await opportunityTextbox.fill(editOpportunityName); //entering new value in opportunity field
  

    //-----------------------------------------------------------------------------------------------------------------//

    // 13. Step: Click on the Convert button.
    // Expected Result: The lead should be successfully converted. A confirmation message ‘Your lead has been converted’ should be displayed and verified

    //await page.locator("//button[text()='Convert']").click(); // click on Convert button
    //page.waitForTimeout(5000);
    await page.getByRole('button', { name: 'Convert',exact: true}).click();
    const convertedSuccessfulMessage = page.locator("//h2[text()='Your lead has been converted']"); // Locating Successfull message
    convertedSuccessfulMessage.isVisible(); //Verifying successful message
    console.log(convertedSuccessfulMessage);

    //---------------------------------------------------------------------------------------------------------------------//

    // 14. Step: Click on the Go to Leads button.
    // Expected Result: It should redirect the user to Leads page.

    await page.locator("//button[text()='Go to Leads']").click(); // click on Go to Leads button
    await page.locator("(//span[text()='Leads'])[2]").isVisible(); // verify it redirects to Leads page

    //-----------------------------------------------------------------------------------------------------------------------//

    // 15. Step: Search the verified lead name in the Search box and verify the text ‘No items to display’.
    // Expected Result: The lead should not be displayed as it has been converted to Opportunity and should display the confirmation message.

    const searchText = page.locator("//input[@placeholder='Search this list...']"); //click on Search text box in Leads page
    await searchText.fill("Kumar R");
    await searchText.press('Enter');
    await page.locator("//span[text()='No items to display.']").isVisible(); // Verify No items to display
    await page.waitForTimeout(3000);
    //---------------------------------------------------------------------------------------------------------------------------//

    // 16. Step: Navigate to the Opportunities tab and search for the opportunity linked with the converted lead.
    // Expected Result: The newly converted opportunity should appear in the list with all the relevant details correctly populated from the lead.

    await page.locator("(//span[text()='Opportunities'])[1]").click();
    const opportunitySearchBox = page.locator("//input[@name='Opportunity-search-input']"); //Search for Opportunities 
    await opportunitySearchBox.fill("Avlon");
    await opportunitySearchBox.press('Enter');
    await page.waitForTimeout(3000);

    //------------------------------------------------------------------------------------------------------------------------------//

    // 17. Step: Search the opportunity name created and click on the created opportunity name.
    // Expected Result: The created Opportunity Name should appear and verify the same.

    //await page.locator("//a[title()='Suzuki']").first().click(); // Click on Searched Opportunity
    await page.locator("//span[@class='slds-grid slds-grid--align-spread forceInlineEditCell']/a").first().click();
    await page.waitForTimeout(3000);
    //const verifyFinalOpportunityName = await page.locator("//div[@class='slds-media__body']/h1").last().innerText();
    const verifyFinalOpportunityName = await page.locator("//lightning-formatted-text[@slot='primaryField']").last().innerText();
    console.log("Final Opportunity Name is : " + verifyFinalOpportunityName); // Verify Final Opportunity Name
    //await expect(verifyFinalOpportunityName).toHaveText(editOpportunityName);
    expect(editOpportunityName).toEqual(verifyFinalOpportunityName);

})
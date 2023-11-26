/*1. Create a function named `checkNumberType` that takes a number as a parameter.
2. Use `if` to check if the number is greater than 0.
   Use `else if` to check if the number is less than 0.
   Use `else` to handle the case when the number is not greater than 0 or less than 0 
   (i.e., when it is zero).
3. Return the corresponding string value for each case.
4. Declare and initialize the variable
5. Call the function and print the result */


let givenNumber = 20;
checkNumberType(givenNumber);

function checkNumberType(givenNumber) {
    if (givenNumber>0) {
        console.log("Given number is greater than 0 : " + givenNumber);
    } else if (givenNumber<0){
        console.log("Given number is less than 0 : " + givenNumber);
    }else{
        console.log("Given number is equal to 0 : " + givenNumber);
    }
    
}
//--------------------------------------------------------------------------------------------------------//

/*1. Create a function named `calculateGrade` that takes a student's score as a parameter.
2. Use `switch` statement inside the function - 
   - Use a `switch` statement with the condition `true`.
   - Use `case` statements to check different score ranges and return the corresponding grade.
3. Declare and initialize the variable
4. Call the function and print the result*/

var score = 29;

calculateGrade(score);

function calculateGrade(score) {

    switch (true) {
        case score > 90:
            console.log("Outstanding");
            break;
        
        case score > 70:
            console.log("Good");
            break;
        
        case score > 60:
            console.log("Better");
            break;
        
        case score > 50:
            console.log("Needs Improvement");
            break;
        
        case score > 35:
            console.log("Concentrate");
            break;
        
        default:
            console.log("Poor");
            break;
    
        }

 }

/*1. Create a function named `checkOddOrEven` that takes a number as a parameter  
2. Use an `if` statement to check if the number is divisible by 2 
    Hint: if the remainder when divided by 2 is 0, then the num is even
3. Declare and initialize the variable  
4. Call the function and print the result*/

var number = 26;

checkOddOrEven(number);

function checkOddOrEven(number) 
{
    if ((number % 2) == 0) {
        
        console.log("Given Input is Even : " + number);
        
    }
    
    else
    
    {
        console.log("Given Input is Odd : " + number);
    }
    
}
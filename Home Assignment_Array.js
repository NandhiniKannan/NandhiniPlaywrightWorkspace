/*
1) Move Zeroes:
 
Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.
 
Example 1:
 
Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]
Example 2:
 
Input: nums = [0]
Output: [0]

2) Array intersection
 
Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must be unique and you may return the result in any order.
 
Example 1:
 
Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2]
 
Example 2:
 
Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
Output: [9,4]
Explanation: [4,9] is also accepted.

3) Find the maximum and minimum:

Given an integer array, find the maximum amd minimum elements in an array and return their indices.

Example: 
Input: nums = [34, 7, 21, 89, 54, 10, 91, 67]
Output: Maximum Element: 91, Index: 6
Minimum Element: 7, Index: 1

4) Remove Duplicates:

Given an integer array with duplicate elements as input, return a new array with duplicates 
elements removed. The order of the elements in the resulting array should be same as the order
in the original array.

Example: 
Input: iputArray = [1, 2, 3, 4, 2, 5, 6, 1, 6]
Output: resultArray = [1, 2, 3, 4, 5, 6]

*/


// Moving Zero Elements

let givenInputArray = [0,7,0,8,8,8,0];
let givenOutputArray = [2,3,0,4,5,0,9,0,5,0,1,9,0];

givenInputArray.sort();
givenOutputArray.sort ();

for (let swappinglastNumber = givenInputArray.length - 1; swappinglastNumber >=0; swappinglastNumber--) {
    let temp = givenInputArray[swappinglastNumber];
    if (temp == 0) {
        givenInputArray.shift();
        givenInputArray.push(0);
    }
}

    for (let swaplastNum = givenOutputArray.length - 1; swaplastNum >=0; swaplastNum--) {
        let temp = givenOutputArray[swaplastNum];
        if (temp == 0) {
            givenOutputArray.shift();
            givenOutputArray.push(0);
        }
    
}
console.log("After Moving Zeros at Last, The Final Outputs are : " + givenInputArray);
console.log("After Moving Zeros at Last, The Final Outputs are : " + givenOutputArray);


//===============================================================================================//

//Array Intersection//
let number1 = [4, 9, 5];
let number2 = [9, 4, 9, 8, 4];
let number3 = [];

for (let x = 0; x < number1.length; x++) {

    for (let y = 0; y < number2.length; y++) {

        if (number1[x] == number2[y]) {
            if (!number3.includes(number1[x])) {
                number3.push(number1[x]);
            }
        }

    }

}
console.log("Array Intersection are : " + number3);

//=======================================================================================//

//Finding Minimum and Maximum elements
let givenNumbers = [34, 7, 21, 89, 54, 10, 91, 67]

console.log("Minimum Element is : " + Math.min(...givenNumbers));
console.log ("Minimum Element Index is : " + givenNumbers.indexOf(Math.min(...givenNumbers)));

console.log("Maximum Element is : " + Math.max(...givenNumbers));
console.log ("Maximum Element Index is : " + givenNumbers.indexOf(Math.max(...givenNumbers)));

//=========================================================================================//
//Removing Duplicates

givenArray = [1, 2, 3, 4, 2, 5, 6, 1, 6];
result = [];

for (let x = 0; x < givenArray.length; x++) {

    if (!result.includes(givenArray[x])) {
        result.push(givenArray[x]);
    }
}
console.log("After Removing Duplicate Numbers, The Results are : " + result);
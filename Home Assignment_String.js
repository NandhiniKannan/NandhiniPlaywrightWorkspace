/*Given a string s consisting of words and spaces, return the length of the last word in the string.
 
Example 1:
 
Input: s = "Hello World"
Output: 5
Explanation: The last word is "World" with length 5.
 
Example 2:
 
Input: s = "   fly me   to   the moon  "
Output: 4
Explanation: The last word is "moon" with length 4.

Example 3: 

Write a function to check if two strings are anagrams.

 Input: isAnagram('listen', 'silent')
 Output: true
 Input: isAnagram('hello', 'world') 
 Output: false
 Explanation: An anagram is when you mix up the letters of a word to make a new one, using all the letters.*/


 //Example 1//
// let givenSentence="Hello World";

// let count=wordLength(givenSentence);
// console.log("Last word length is : "+count)

// function wordLength()
// {
//     let count =0;
//     for(let i=givenSentence.length-1;i>=0;i--)
//     {
//       if(givenSentence.charAt(i)!==' ')
//       {
//         count++;
//       }
//       else
//       {
//         if(count>0)
//         {
//             return count;
//         }
//       }
//     }

// }
//==========================================================================================//
 //Example 2//
//  let givenSentence=" fly me   to   the moon";

//  let count=wordLength(givenSentence);
//  console.log("Last word length is : "+count)
 
//  function wordLength()
//  {
//      let count =0;
//      for(let i=givenSentence.length-1;i>=0;i--)
//      {
//        if(givenSentence.charAt(i)!==' ')
//        {
//          count++;
//        }
//        else
//        {
//          if(count>0)
//          {
//              return count;
//          }
//        }
//      }
 
//  }
//======================================================================================// 
//Example 3//

let givenString1="silent";
let givenString2="listen";

givenString1=givenString1.toLowerCase().split("").sort().join("");
givenString2=givenString2.toLowerCase().split("").sort().join("");

if(givenString1 == givenString2)
{
    console.log("Given string is an ANAGRAM")
}
else
{
    console.log("Given String is NOT an ANAGRAM")
}

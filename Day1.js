// 🧠 Problem 1: Two Sum 

// Given an array of integers and a target value, return the indices of the two numbers that add up to the target.

// Example:
// Input: nums = [2, 7, 11, 15], target = 9  
// Output: [0, 1]

// let nums = [2, 7 ,11 ,15];
// let target = 9;

// let lenOfArray = nums.length;

// for (let i=0; i<lenOfArray; i++) {
//     for (let j=0; j<lenOfArray; j++) {
//         if (i!== j && nums[i] + nums[j] == target) {
//             console.log([i, j]);
//             return;
//         }
//     }
// }
// console.log(result);
// =======================================================================

// 🧠 Problem 2: Find Maximum Number

// Given an array, find the largest number in it.

// Example:
// Input: [3, 7, 2, 9, 5]  
// Output: 9
// 📌 Your Task:
// Use loop
// Don’t use built-in methods like Math.max
// Think step by step:
// Start with first element
// Compare with others
// 💡 Hint:
// let max = nums[0];

// let input = [3, 7 ,2, 9, 5];

// let lenOfArr = input.length;
// let max = input[0];
// for (let i=1; i<lenOfArr; i++) {
//     if (input[i] > max) {
//         max = input[i];
//     }
// }
// console.log(max);
// ===============================================================================

// 🧠 Problem 3: Second Largest Number

// Find the second largest element in an array.

// Example:
// Input: [10, 5, 8, 20, 15]
// Output: 15
// 📌 Rules:
// No sorting allowed
// Only one loop preferred
// Think carefully about:
// largest
// second largest

// let input = [10, 5, 8, 20, 15];
// let max = -Infinity;
// let secondMax = -Infinity;

// let lenOfArr = input.length;
// for (let i=0; i<lenOfArr; i++) {
//     let num = input[i];
//     if (num > max) {
//         secondMax = max;
//         max = num;
//     } else if (num > secondMax && num !== max) {
//         secondMax = num;
//     }
// }
// console.log(secondMax);
// =====================================================================================
// 🧠 Problem 5: Third Largest Element (NO sorting)

// Example:

// [10, 5, 8, 20, 15]

// Output:

// 10
// 💡 Hint (don’t rush)

// You now need:

// let max = -Infinity;
// let secondMax = -Infinity;
// let thirdMax = -Infinity;

// And update all three properly.

// let input = [10, 5, 8, 20, 15];

// let max = -Infinity;
// let secondMax = -Infinity;
// let thirdMax = -Infinity;
// let lenOfArr = input.length;

// for(let i=0; i<lenOfArr; i++) {
//     let num = input[i];
//     if (num > max) {
//         thirdMax = secondMax;
//         secondMax = max;
//         max = num;
//     } else if (num > secondMax && num < max) {
//         thirdMax = secondMax;
//         secondMax = num;
//     } else if (num > thirdMax && num < secondMax) {
//         thirdMax = num;
//     }
// }
// console.log(thirdMax);
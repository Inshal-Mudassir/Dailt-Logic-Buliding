// 1- Two Sum

// /**
//  * @param {number[]} nums
//  * @param {number} target
//  * @return {number[]}
//  */
// var twoSum = function(nums, target) {
//     let lenOfArray = nums.length;
//     for (let i=0; i<lenOfArray; i++) {
//         for (let j=0; j<lenOfArray; j++) {
//             if (i !== j && nums[i] + nums[j] === target) {
//                 return ([i, j]);
//             } 
//         }
//     }
// };

// nums = [2,7,11,15];
// target = 9;
// console.log(twoSum(nums, target));
// ===================================================================
// Count Frequency Of Numbers

// let arr = [1, 2, 2, 3, 1, 2];
// let freq = new Map();
// for (let num of arr) {
//     if(freq.has(num)) {
//         freq.set(num, freq.get(num) + 1);
//     } else {
//         freq.set(num, 1);
//     }
// }
// console.log(freq);
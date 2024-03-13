// PW2.01.016
// Remove Duplicates from Sorted Array
/*const removeDuplicates = (nums: number[]): number => {
  if (nums.length === 0) {
    return 0;
  }

  let uniqueCount: number = 1; // Initialize with 1 since the first element is always unique

  for (let i: number = 1; i < nums.length; i++) {
    if (nums[i] !== nums[i - 1]) {
      nums[uniqueCount] = nums[i];
      uniqueCount++;
    }
  }

  return uniqueCount;
};

// Example usage:
let nums1: number[] = [1, 1, 2];
let k1: number = removeDuplicates(nums1);
console.log(k1); // Output: 2
console.log(nums1.slice(0, k1)); // Output: [1, 2]

let nums2: number[] = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
let k2: number = removeDuplicates(nums2);
console.log(k2); // Output: 5
console.log(nums2.slice(0, k2)); // Output: [0, 1, 2, 3, 4]
*/

// PW2.01.017
// Move Zeroes
/* 
const moveZeroes = (nums: number[]): void => {
  let nonZeroIndex: number = 0;

  // Move non-zero elements to the beginning
  for (let i: number = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[nonZeroIndex] = nums[i];
      nonZeroIndex++;
    }
  }

  // Fill the remaining positions with zeros
  for (let i: number = nonZeroIndex; i < nums.length; i++) {
    nums[i] = 0;
  }
};

// Example usage:
let nums1: number[] = [0, 1, 0, 3, 12];
moveZeroes(nums1);
console.log(nums1); // Output: [1, 3, 12, 0, 0]

let nums2: number[] = [0];
moveZeroes(nums2);
console.log(nums2); // Output: [0]
*/

// problem:3
// PW2.01.018
// Majority Element
/* const majorityElement = (nums: number[]): number => {
  let candidate: number | undefined;
  let count = 0;

  nums.forEach((num) => {
    if (count === 0) {
      candidate = num;
    }

    count += num === candidate ? 1 : -1;
  });

  return candidate as number;
};

// Example usage:
const nums1: number[] = [3, 2, 3];
const result1: number = majorityElement(nums1);
console.log(result1); // Output: 3

const nums2: number[] = [2, 2, 1, 1, 1, 2, 2];
const result2: number = majorityElement(nums2);
console.log(result2); // Output: 2

*/

// PW2.01.019
// Best Time to Buy and Sell Stock
/*
 const maxProfit = (prices: number[]): number => {
  let minPrice = Infinity;
  let maxProfit = 0;

  prices.forEach((price) => {
    minPrice = Math.min(minPrice, price);
    maxProfit = Math.max(maxProfit, price - minPrice);
  });

  return maxProfit;
};

// Example 1
const prices1: number[] = [7, 1, 5, 3, 6, 4];
console.log(maxProfit(prices1)); // Output: 5

// Example 2
const prices2: number[] = [7, 6, 4, 3, 1];
console.log(maxProfit(prices2)); // Output: 0
*/

// PW2.01.020
// Find All Duplicates in an Array
/*
const findDuplicates = (nums: number[]): number[] => {
  const duplicates: number[] = [];

  for (let i = 0; i < nums.length; i++) {
    const index = Math.abs(nums[i]) - 1;

    if (nums[index] < 0) {
      duplicates.push(index + 1);
    } else {
      nums[index] = -nums[index];
    }
  }

  return duplicates;
};

// Example usage:
const example1 = [4, 3, 2, 7, 8, 2, 3, 1];
const example2 = [1, 1, 2];
const example3 = [1];

console.log(findDuplicates(example1)); // Output: [2, 3]
console.log(findDuplicates(example2)); // Output: [1]
console.log(findDuplicates(example3)); // Output: []
*/

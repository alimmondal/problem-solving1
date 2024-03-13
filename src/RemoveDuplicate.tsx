// PW2.01.016
// Remove Duplicates from Sorted Array

export function RemoveDuplicatesFromSortedArray() {
  const removeDuplicates = (nums: number[]): number => {
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
}

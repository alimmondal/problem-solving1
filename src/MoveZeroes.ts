// PW2.01.017
// Move Zeroes

export function MoveZeroes() {
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
}

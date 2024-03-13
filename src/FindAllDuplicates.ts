// PW2.01.020
// Find All Duplicates in an Array

export function FindAllDuplicatesInAnArray() {
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
}

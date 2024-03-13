// problem:3
// PW2.01.018
// Majority Element

export function MajorityElement() {
  const majorityElement = (nums: number[]): number => {
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
}

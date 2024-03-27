//Question:4. Is the Average of All Elements a Whole Number?
// Create a function that takes an array as an argument and returns true or false depending on whether the average of all elements in the array is a whole number or not.

export function isAverageWhole() {
  const isAverageWhole = (arr: number[]): boolean => {
    const sum = arr.reduce((acc, curr) => acc + curr, 0);
    const average = sum / arr.length;
    return Number.isInteger(average);
  };

  // Example usage:
  const array1 = [1, 2, 3, 4, 5];
  console.log(isAverageWhole(array1)); // Output: true (Average is 3, which is a whole number)

  const array2 = [1, 2, 3, 4, 5, 6];
  console.log(isAverageWhole(array2)); // Output: false (Average is 3.5, which is not a whole number)
}

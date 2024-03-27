// Question: 1
// Create a function that takes an array of numbers and return both the minimum and maximum numbers, in that order.

export function findMinMaxNumber() {
  const findMinMax = (numbers: number[]): [number, number] => {
    if (numbers.length === 0) {
      throw new Error("Array is empty");
    }

    const min = Math.min(...numbers);
    const max = Math.max(...numbers);

    return [min, max];
  };

  // Example usage:
  const numbers = [3, 1, 4, 1, 5, 9, 2, 6, 5];
  const [min, max] = findMinMax(numbers);
  console.log("Minimum:", min); // Output: Minimum: 1
  console.log("Maximum:", max); // Output: Maximum: 9
}

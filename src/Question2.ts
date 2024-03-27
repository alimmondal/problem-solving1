// Question: 2
// Create a function that takes an array of non-negative integers and strings and return a new array without the strings.

export function filterOutStringsFromArray() {
  const filterOutStrings = (arr: (number | string)[]): number[] => {
    return arr.filter((item) => typeof item === "number") as number[];
  };

  // Example usage:
  const mixedArray: (number | string)[] = [
    1,
    "apple",
    3,
    "banana",
    5,
    "cherry",
  ];
  const filteredArray: number[] = filterOutStrings(mixedArray);
  console.log(filteredArray); // Output: [1, 3, 5]
}

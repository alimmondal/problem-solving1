// Question:3
// Create a function that returns an array of strings sorted by length in ascending order.

export function functionSortByLengthAscending() {
  const sortByLengthAscending = (arr: string[]): string[] => {
    return arr.slice().sort((a, b) => a.length - b.length);
  };

  // Example usage:
  const unsortedStrings = ["apple", "banana", "cherry", "date", "fig"];
  const sortedStrings = sortByLengthAscending(unsortedStrings);
  console.log(sortedStrings); // Output: ["fig", "date", "apple", "banana", "cherry"]
}

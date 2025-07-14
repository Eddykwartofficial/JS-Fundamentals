/**
 * Script to print multiple language statements using an array and a loop.
 *
 * Constraints:
 * - Use an array of strings.
 * - Use a loop (e.g., for, while, for...of).
 * - Use console.log(...) to print all output.
 * - Do not use 'var'.
 * - Do not use any 'if/else' statement.
 * - Use only one console.log function call.
 *
 * The output should be:
 * C is fun
 * Python is cool
 * JavaScript is amazing
 */

// Define an array of strings using 'const' as required.
const languages = [
  "C is fun",
  "Python is cool",
  "JavaScript is amazing"
];

// Initialize an empty string using 'let' to build the final output.
// 'let' is used because its value will be reassigned within the loop.
let outputString = "";

// Use a for...of loop to iterate over each element in the 'languages' array.
// This satisfies the requirement to use a loop and avoids 'var'.
for (const language of languages) {
  // Append the current language string to outputString, followed by a newline character.
  // This builds a single string with each phrase on a new line.
  outputString += language + "\n";
}

// Use console.log once to print the entire constructed string.
// The .slice(0, -1) method is used to remove the trailing newline character
// that results from the loop, ensuring the output exactly matches the example
// and satisfies the "no if/else" constraint for newline handling.
console.log(outputString.slice(0, -1));

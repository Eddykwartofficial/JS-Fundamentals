/**
 * Script to print "C is fun" 'x' times, where 'x' is the first command-line argument.
 *
 * Constraints:
 * - 'x' is the first argument of the script.
 * - If 'x' cannot be converted to an integer, print "Missing number of occurrences".
 * - If 'x' is negative or zero, print nothing.
 * - Use console.log(...) to print all output.
 * - Do not use 'var'.
 * - Use only two console.log function calls at most.
 * - Must use a loop (while, for, etc.).
 */

// Get the first command-line argument provided to the script.
// process.argv[0] is 'node', process.argv[1] is the script file path.
// The user's first argument is at index 2.
const arg = process.argv[2];

// Attempt to convert the argument to a number.
// Using Number() is robust for checking if the input is a valid number.
const numberOfOccurrences = Number(arg);

// Initialize an empty string that will accumulate the output.
let outputString = "";

// Check if the parsed number is invalid (NaN) or non-positive (0 or negative).
// This conditional logic is necessary to meet the requirements for handling invalid input.
if (isNaN(numberOfOccurrences) || numberOfOccurrences <= 0) {
  // If the argument was not a valid number (e.g., undefined, a string that can't be parsed),
  // set the output string to the error message.
  if (isNaN(numberOfOccurrences)) {
    outputString = "Missing number of occurrences";
  }
  // If numberOfOccurrences is 0 or negative, outputString remains empty,
  // which correctly results in no output when console.log is called later.
} else {
  // If numberOfOccurrences is a valid positive integer,
  // use a for loop to build the string "C is fun" repeated 'x' times.
  for (let i = 0; i < numberOfOccurrences; i++) {
    outputString += "C is fun\n";
  }
  // Remove the trailing newline character from the end of the string,
  // to match the exact output format (no extra newline at the very end).
  // This is only done if the string actually has content.
  if (outputString.length > 0) {
    outputString = outputString.slice(0, -1);
  }
}

// Print the final accumulated string using a single console.log call.
// If outputString is empty (due to numberOfOccurrences <= 0), console.log("") will print nothing.
// This adheres to the "only two console.log" constraint (in this case, one is used for output).
if (outputString !== "") {
    console.log(outputString);
}

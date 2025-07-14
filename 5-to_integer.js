#!/usr/bin/node

// Access the command-line arguments provided when running the script.
// process.argv[0] is the path to the node executable.
// process.argv[1] is the path to the script file.
// process.argv[2] is the first actual argument, so we select that.
const firstArgument = process.argv[2];

// Use parseInt() to try and convert the argument to an integer.
// If the argument cannot be converted (e.g., it's "School"), parseInt() returns NaN.
const number = parseInt(firstArgument);

// Use the isNaN() function to check if the conversion resulted in NaN.
// This is the required way to check for a failed conversion without using try/catch.
if (isNaN(number)) {
  console.log('Not a number');
} else {
  // If the conversion was successful, print the message with the resulting integer.
  console.log(`My number: ${number}`);
}

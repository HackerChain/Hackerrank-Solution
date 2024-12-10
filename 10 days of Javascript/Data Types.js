"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", (inputStdin) => {
  inputString += inputStdin;
});

process.stdin.on("end", (_) => {
  inputString = inputString
    .trim()
    .split("\n")
    .map((string) => {
      return string.trim();
    });

  main();
});

function readLine() {
  return inputString[currentLine++];
}

function performOperation(secondInteger, secondDecimal, secondString) {
  // Declare first variables
  const firstInteger = 4;
  const firstDecimal = 4.0;
  const firstString = "HackerRank ";

  // Step 1: Convert and sum integers
  const sumInteger = firstInteger + parseInt(secondInteger);
  console.log(sumInteger);

  // Step 2: Convert and sum decimals
  const sumDecimal = firstDecimal + parseFloat(secondDecimal);
  console.log(sumDecimal);

  // Step 3: Concatenate strings
  const concatenatedString = firstString + secondString;
  console.log(concatenatedString);
}

function main() {
  const secondInteger = readLine();
  const secondDecimal = readLine();
  const secondString = readLine();

  performOperation(secondInteger, secondDecimal, secondString);
}

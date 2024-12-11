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

/**
 *   Return the second largest number in the array.
 *   @param {Number[]} nums - An array of numbers.
 *   @return {Number} The second largest number in the array.
 **/
function getSecondLargest(nums) {
  // Complete the function
  let firstLargest = -Infinity; // Initialize first largest
  let secondLargest = -Infinity; // Initialize second largest

  for (let num of nums) {
    if (num > firstLargest) {
      secondLargest = firstLargest; // Update second largest
      firstLargest = num; // Update first largest
    } else if (num > secondLargest && num < firstLargest) {
      secondLargest = num; // Update second largest if num is between first and second
    }
  }

  return secondLargest;
}

function main() {
  const n = +readLine();
  const nums = readLine().split(" ").map(Number);

  console.log(getSecondLargest(nums));
}
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

function getGrade(score) {
  if (score < 0 || score > 30) {
    return "Invalid score"; // Handle invalid scores
  } else if (score >= 26) {
    return "A";
  } else if (score >= 21) {
    return "B";
  } else if (score >= 16) {
    return "C";
  } else if (score >= 11) {
    return "D";
  } else if (score >= 6) {
    return "E";
  } else {
    return "F";
  }
}

function main() {
  const score = +readLine();

  console.log(getGrade(score));
}

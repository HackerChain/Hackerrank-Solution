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

function getLetter(s) {
  const firstChar = s.charAt(0); // Get the first character of the string

  switch (firstChar) {
    case "a":
    case "e":
    case "i":
    case "o":
    case "u":
      return "A"; // Vowels
    case "b":
    case "c":
    case "d":
    case "f":
    case "g":
      return "B"; // Letters b to g
    case "h":
    case "j":
    case "k":
    case "l":
    case "m":
      return "C"; // Letters h to m
    case "n":
    case "p":
    case "q":
    case "r":
    case "s":
    case "t":
    case "v":
    case "w":
    case "x":
    case "y":
    case "z":
      return "D"; // Letters n to t
    default:
      return ""; // For any other characters (though not expected in this task)
  }
}

function main() {
  const s = readLine();

  console.log(getLetter(s));
}

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

/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
function vowelsAndConsonants(s) {
  const vowels = "aeiou"; // Define vowels
  let vowelOutput = "";
  let consonantOutput = "";

  // Loop through each character in the string
  for (let char of s) {
    if (vowels.includes(char)) {
      if (vowelOutput === "") vowelOutput += char;
      else vowelOutput += "\n" + char; // Append vowel with a newline
    } else {
      if (consonantOutput === "") consonantOutput += char;
      else consonantOutput += "\n" + char;
    }
  }

  // Print all vowels first
  console.log(vowelOutput);
  // Print all consonants next
  console.log(consonantOutput);
}

function main() {
  const s = readLine();

  vowelsAndConsonants(s);
}

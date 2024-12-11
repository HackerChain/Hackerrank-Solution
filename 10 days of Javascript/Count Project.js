function getCount(arr) {
  let count = 0; // Initialize a counter

  // Iterate through each object in the array
  for (let obj of arr) {
    // Check if the condition is satisfied (for example, a > b)
    if (obj.a === obj.b) {
      count++; // Increment the counter
    }
  }

  return count; // Return the total count
}

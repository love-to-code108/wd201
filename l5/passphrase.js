let isValidPassphrase = (text) => {
  let isValidPassphrase = (text) => {
    let words = text.split(" ")

  
    // ensure that there are four words
    let minimumFourWords = (words.length >= 4);
  
    // Since the number of words in our passphrase is unknown, let's check each word,
    // regardless of how many there are.
    let minimumTwoCharsEach = words.every(word => word.length >= 2);
  
    // Finally, let's check if both conditions are true...
    let conditionsSatisfied = minimumTwoCharsEach && minimumFourWords
  
    // Let's "return" the value from this function. We'll learn more about this in the next level.
    return conditionsSatisfied;
  }
  
  // For example: `isValidPassphrase("this should be enough")`
  //
  // IMPORTANT: However, please make sure that you include this line (unchanged) in the JS
  // file that you upload to Pupilfirst LMS. It lets our automated tests "pick up" your
  // function and use it.
  module.exports = isValidPassphrase;
}

// Don't alter the `module.exports` line below - if you want to test your code, copy and
// paste the function, starting from `let isValidPassphrase = ...` to the final closing
// brace `}` into the browser's console, and call the function with different values.
//
// For example: `isValidPassphrase("this should be enough")`
//
// IMPORTANT: However, please make sure that you include this line (unchanged) in the JS
// file that you upload to Pupilfirst LMS. It lets our automated tests "pick up" your
// function and use it.
module.exports = isValidPassphrase;




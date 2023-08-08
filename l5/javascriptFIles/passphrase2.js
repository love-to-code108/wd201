let isValidPassphrase = (text) => {
  
  let trimmedText = text.trim();


  let words = trimmedText.split(" ");


  let numberOfValidWords = words.length;
  // console.log(numberOfValidWords);

  

  for(let i = 0 ; i <= words.length - 1 ; i++ ){

    let word = words[i];

    if(word.length < 2 ){

      return false;
    }

    
  }

    if(numberOfValidWords >= 4){
      return true;
    }else{
      return false;
    }

  

  // Let's "return" the value from this function. We'll learn more about this in the next level.
  // return conditionsSatisfied;
  
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





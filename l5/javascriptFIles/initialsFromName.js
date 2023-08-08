/* This function should convert a name to initials. Here are few conditions to be met:
    1. A single worded name must return the first two letters of the word as initials. Eg. John should have an initial JO
    2. A two worded name must return the first letter of each of the word in the name. Eg. John Doe should have an initial JD
    3. A name with more words should return the starting letter of the first and the last word as initial. Eg. John Doe Honai should have an initial JH
    4. The function should return all initials in uppercase.
*/


let createInitialsFromName = (name) => {
  let words = name.split(" ");
  let wordlen = words.length;
  console.log(wordlen)
  fname = words[0].split("");
  lname = words[wordlen-1].split("");
  let initials ="";
  if (wordlen > 1) {
      
      initials = fname[0]+lname[0];
    } else {
      initials = fname[0]+fname[1];
    }

  return initials.toUpperCase();

};

module.exports = createInitialsFromName;

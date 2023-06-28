function isPalindrome(word) {
  // Write your algorithm here
  let wordArray = word.split('')
  let  reverseWordArray = []
  for (let i=wordArray.length-1; i>=0; i--){
    reverseWordArray.push(wordArray[i])
  }
  console.log(wordArray, reverseWordArray);
  let reversedWord =  reverseWordArray.join('')
  return  (word == reversedWord)
}

isPalindrome("racecar")

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;

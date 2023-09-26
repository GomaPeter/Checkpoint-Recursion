// Function to determine whether the given word is palindrome or not
function isPalindrome(word) {
    if(word.length <= 1) {
        return true;
    }

    // compares the first character with the last character using the "if " statement
    if(word[0] === word[word.length - 1]) {
        return isPalindrome(word.slice(1,word.length - 1));
    } else {
        return false;
    }
}


// const word = "radar" // output: true
// const word = "gag" // output: true
// const word = "kayak" // output: true
const word = "php" // output; true
console.log(isPalindrome(word));
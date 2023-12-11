function isPalindrome(string) {
  // Start coding here
  const lowercaseString = string.toLowerCase();
  const characters = lowercaseString.split('').filter(char => /[a-z]/.test(char));
  for (let i = 0; i < characters.length / 2; i++) {
    if (characters[i] !== characters[characters.length - 1 - i]) {
      return false;
    }
  }
  return true;
}

//Example case
console.log(isPalindrome("reviver"));// true
console.log(isPalindrome("บวบ"));// true
console.log(isPalindrome("deliver"));// false
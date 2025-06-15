// Soal 3: Palindrome
// Cek apakah kata adalah palindrome (dibaca sama dari depan dan belakang).

function isPalindrome(str) {
  return str === str.split('').reverse().join('');
}

console.log(isPalindrome("katak")); // true

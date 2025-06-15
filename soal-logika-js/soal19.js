// Soal 19: Cek Anagram

function isAnagram(a, b) {
  const sort = str => str.split('').sort().join('');
  return sort(a) === sort(b);
}
console.log(isAnagram("listen", "silent")); // true

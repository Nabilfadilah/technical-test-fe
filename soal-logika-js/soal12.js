// Soal 12: Sorting Angka (Ascending)

function sortAsc(arr) {
  return arr.sort((a, b) => a - b);
}
console.log(sortAsc([5,1,4,2])); // [1,2,4,5]

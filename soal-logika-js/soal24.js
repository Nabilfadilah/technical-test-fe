// Soal 24: Cari Elemen Terbanyak

function mostFrequent(arr) {
  const map = {};
  let max = 0, result;
  for (let item of arr) {
    map[item] = (map[item] || 0) + 1;
    if (map[item] > max) {
      max = map[item];
      result = item;
    }
  }
  return result;
}
console.log(mostFrequent([1,2,2,3,3,3,3,2])); // 3

// Soal 25: Format Nomor Telepon

function formatNomor(arr) {
  if (arr.length !== 10) return "Invalid";
  return `(${arr.slice(0,3).join('')}) ${arr.slice(3,6).join('')}-${arr.slice(6).join('')}`;
}

console.log(formatNomor([0,8,1,2,3,4,5,6,7,8])); // (081) 234-5678

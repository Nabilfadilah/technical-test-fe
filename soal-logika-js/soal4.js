// Soal 4: FizzBuzz
// Cetak angka 1–20. Jika kelipatan 3 cetak “Fizz”, kelipatan 5 cetak “Buzz”, kelipatan 3 dan 5 cetak “FizzBuzz”.

for (let i = 1; i <= 20; i++) {
  let output = "";
  if (i % 3 === 0) output += "Fizz";
  if (i % 5 === 0) output += "Buzz";
  console.log(output || i);
}

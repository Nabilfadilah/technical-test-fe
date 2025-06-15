// Soal 9: Object Destructuring
// Ambil properti name dan age dari objek berikut:

const user = {
  nameUser: "Budi",
  age: 25,
  city: "Jakarta"
};

const { nameUser, age } = user;
console.log(nameUser, age); // Budi 25

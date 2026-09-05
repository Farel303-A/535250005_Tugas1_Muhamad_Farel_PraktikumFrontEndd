//Tipe Data string

//Mengetahui panjang String
let namadia = 'John';
console.log(namadia.length); // Output: 4 (jumlah karakter)

// Mengubah case karakter
let teks = 'Belajar Javascript';

console.log(teks.toLowerCase()) // Output: belajar javascript
console.log(teks.toUpperCase()) // Output: BELAJAR JAVASCRIPT

// Mencari Indeks Karakter / Substring
let tek = 'BelajarJavaScript';

console.log(tek.indexOf('Javascript')); // output: 8 (mulai dari indeks ke-8)
console.log(tek.indexOf('CSS')); // output: -1 (tidak ditemukan)
console.log(tek.lastIndexOf('a')); // output: 10 (posisi 'a' terakhir)

//Memotong (Slice) string
let notes = 'Belajar Javascript';

console.log(notes.slice(7)); // Output: Javascript
console.log(notes.slice(0, 7)); // Output: Belajar

//Mengganti (Replace) Substring
let n = 'Belajar Javascript';
console.log(n.replace('Javascript', 'CSS')); // Output: Belajar CSS

//Memisahkan String menjadi Array
let kalimat = 'Belajar,Javascript';

// split() akan memecah string jadi array berdasarkan tanda koma
let hasilSplit = kalimat.split(',');

console.log(hasilSplit); // Output: ['Belajar', 'Javascript']

//Menggabungkan array menjadi string
let kataArray = ['Belajar', 'Javascript'];

// join() menggabungkan isi array dengan spasi
let hasilJoin = kataArray.join(' ');

console.log(hasilJoin); // Output: Belajar Javascript

//Interpolasi string (Template Literal)
let orang = 'John Doe';
let usia = 25;

//Guanakan backtick ` dan sintaks ${}
let biodata = `Nama: ${orang}, Umur: ${usia}`;

console.log(biodata); 
// Output: Nama: John Doe, Umur: 25
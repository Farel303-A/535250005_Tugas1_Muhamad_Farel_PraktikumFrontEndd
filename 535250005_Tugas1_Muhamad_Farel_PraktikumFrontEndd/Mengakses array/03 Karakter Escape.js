//Karakter Escape
// \n menjadi baris baru
let teksbarisbaru = 'Halo,\nSelamat datang!';
console.log(teksbarisbaru);

// \t menjadi tab
let teksTab = 'Nama,\tIrvan BelajarIT!';
console.log(teksTab);

// \` menjadi kutip tunggal
let tekskutiptunggal = 'I\`m Learning Javascript';
console.log(tekskutiptunggal); // Output: I'm Learning Javascript

// \" menjadi kutip ganda
let tekskutip2 = "Dia Berkata, \"Hello!\"";
console.log(tekskutip2);

// \\ menjadi backslash
let teksbackslash = 'C:\\MyFolder\\MyFile.txt';
console.log(teksbackslash); // Output: C:\MyFolder\MyFile.txt

//Ubah Case (toUpperCase & toLowerCase)
let contohkecil = 'hello world';
let hasilupper = contohkecil.toUpperCase();
console.log(hasilupper); // Output: HELLO WORLD

let contohbesar = 'Hello World';
let hasillower = contohbesar.toLowerCase();
console.log(hasillower); // Output: hello world
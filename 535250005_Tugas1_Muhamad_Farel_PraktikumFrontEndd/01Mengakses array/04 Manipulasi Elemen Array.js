//Metoda Push()
let buahPush = ['Apel', 'Pisang', 'Jeruk'];
buahPush.push('Mangga');
console.log(buahPush); // Output: ['Apel', 'Pisang', 'Jeruk', 'Mangga']

//Metoda Pop()
let fruitsPop = ['Apple', 'Banana', 'Orange'];
fruitsPop.pop();
console.log(fruitsPop); // Output: ['Apple', 'Banana']

//Metode unshift()
let fruitsUnshift = ['Apple', 'Banana', 'Orange'];
fruitsUnshift.unshift('Mango');
console.log(fruitsUnshift); // Output: ['Mango', 'Apple', 'Banana', 'Orange']

//Metode shift()
let fruitsShift = ['Apple', 'Banana', 'Orange'];
let firstFruit = fruitsShift.shift();
console.log(firstFruit); // Output: 'Apple'
console.log(fruitsShift); // Output: ['Banana', 'Orange']

//Metode splice()
let fruitsSplice = ['Apple', 'Banana', 'Orange', 'Mango'];
fruitsSplice.splice(2, 1);
console.log(fruitsSplice); // Output: ['Apple', 'Banana', 'Mango']
fruitsSplice.splice(0, 1, 'Strawberry');
console.log(fruitsSplice); // Output: ['Strawberry', 'Banana', 'Mango']
fruitsSplice.splice(2, 0, 'Pineapple');
console.log(fruitsSplice); // Output: ['Strawberry', 'Banana', 'Pineapple', 'Mango']

//Metode slice()
let fruitsSlice = ['Apple', 'Banana', 'Orange', 'Mango'];
let slicedFruits = fruitsSlice.slice(1, 3);
console.log(slicedFruits); // Output: ['Banana', 'Orange']

//Metode concat()
let fruitsConcat1 = ['Apple', 'Banana'];
let fruitsConcat2 = ['Orange', 'Mango'];
let combinedFruits = fruitsConcat1.concat(fruitsConcat2);
console.log(combinedFruits); // Output: ['Apple', 'Banana', 'Orange', 'Mango']

//Metode reverse()
let fruitsReverse = ['Apple', 'Banana', 'Orange', 'Mango'];
fruitsReverse.reverse();
console.log(fruitsReverse); // Output: ['Mango', 'Orange', 'Banana', 'Apple']

//Metode sort()
let fruitsSort = ['Banana', 'Apple', 'Orange', 'Mango'];
fruitsSort.sort();
console.log(fruitsSort); // Output: ['Apple', 'Banana', 'Mango', 'Orange']

//Metode join()
let fruitsJoin = ['Apple', 'Banana', 'Orange', 'Mango'];
let joinedFruits = fruitsJoin.join(', ');
console.log(joinedFruits); // Output: 'Apple, Banana, Orange, Mango'

//Properti Length
let fruitsLength = ['Apple', 'Banana', 'Orange', 'Mango'];
console.log(fruitsLength.length); // Output: 4
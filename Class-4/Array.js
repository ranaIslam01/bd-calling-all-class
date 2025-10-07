// Array Create
const a = [1,2,3,4];
console.log(a);

const b = new Array(1);
console.log(b);

const c = Array.of(1, 2, 3,4,5);
console.log(c);

const d = Array.from("Rana Islam")
console.log(d);

// Access & Properties

const array = ["Rana", "Rakib", "20", 5, 10, 15];
console.log(array.indexOf("20"));
console.log(array.includes("Rana"));
console.log(array.find((n) => n < 10));

// Mutating vs Non-Mutating Methods

const arrays = ["Rana", "Rakib", "20", 5, 10, 15];
arrays.push("Bangladesh");
arrays.pop()
arrays.unshift("Pakistan")
arrays.shift()
// console.log(array.slice(1,3));
arrays.splice(1,3)
console.log(arrays);
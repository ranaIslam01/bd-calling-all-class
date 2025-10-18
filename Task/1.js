// filter odd even
const array = [1, 2, 3, 4, 5, 6];
const even = array.filter((n) => n % 2 === 0);
const odd = array.filter((n) => n % 2 === 1);
const evenSum = even.reduce((a, b) => a + b, 0);
const oddSum = odd.reduce((a, b) => a + b, 0);
console.log("even number: ", even);
console.log("odd number: ", odd);
console.log("even sum: ", evenSum);
console.log("odd sum: ", oddSum);

//Combine tow array
const a = "Rana ";
const b = "Rakib";
const c = a.concat(b);
console.log("Concat",c);

// Flaten nested array

const arr = [1, 2, [3, 4, [5, 6]]];
const flatarray = arr.flat(Infinity);
console.log("Flaten: ",flatarray);

// splice

const splice = [1, 2, 3, 4, 5];
const spliceArray = splice.splice(1, 3);
console.log("Splice : ",spliceArray);

// Map
const objArray = [1, 2, 3, 4];
const objMap = objArray.map((n) => n * 2);
console.log("Map: ",objMap);

// Filter
const objFilter = objArray.filter((a) => a > 2);
console.log("Filter",objFilter);

// Reduce
const objReduce = objArray.reduce((a, b) => a + b, 0);
console.log("Reduce: ",objReduce);



//                 //Synchronous//

// function add(a,b){
//   const sum = a+b;
//   console.log('1st');
//   return sum;
// }

// console.log("3rd" , add(3,3));

// console.log('2nd');

//                  // Asynchronous//

// Example 1 Asynchronous
// function fetchData(callback) {
//   console.log("Server theke data load hosse ");
//   setTimeout(() => {
//     const data = [
//       { id: 1, name: "Rana Islam" },
//       { id: 2, name: "Rakib Islam" },
//     ];
//     callback(data);
//   }, 2000);
// }

// fetchData((userData) => {
//   console.log("Recived Data:  ", userData);
// });

              // Example 2 Asynchronous + Promise

// function fatchData () {
//   console.log("Server is running")
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//     const handle = true;
//     const data = [
//       {id:1, name: "Rana Islam"},
//       {id:2, name: "Rakib Islam"},
//     ]
//     if(handle === true){
//       resolve(data);
//     }else{
//       reject("Error massage")
//     }
//     },2000)
//   })
// }
// fatchData()
//  .then((userData) => {
//   console.log(userData);
//  })
//  .catch((error) => {
//   console.log(error);
//  })
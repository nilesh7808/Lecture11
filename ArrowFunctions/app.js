// Arrow Function

// function add(a, b) {
//     console.log(a + b);
// }

// add(2, 5);

// function expression

// let fun = function x() {
//     console.log("Inside X");
// }
// fun();

// You can ommit function name too also known as Annonymous function

// const funs = () => {
//     console.log("Inside Funs");
// }
// funs();

// const add = (x, y) => {
//     return x + y;
// }

// ------------------------ $$$$$$$$$$$$$$$$$$$$$$$$$$$$$------------------------------------

// const squareRoot = (num) => {
//     return Math.sqrt(num);
// }

//               *************************** OR *****************************

// for only parameter you can remove the braces '()' and will get same result

// const squareRoot = num => {
//     return Math.sqrt(num);
// }

//               *************************** OR *****************************

const squareRoot = num => Math.sqrt(num);


// ------------------------ $$$$$$$$$$$$$$$$$$$$$$$$$$$$$------------------------------------

// const car = {
//     name: "Audi3325",
//     price: 80000000,
//     startCar: function() {
//         console.log(this);
//         console.log(this.name);

//     }
// }
// car.startCar();


// const car = {
//     name: "Audi3325",
//     price: 80000000,
//     startCar: () => {
//         // never use this in arrow functions
//         console.log(this);
//         console.log(this.name);

//     }
// }
// car.startCar();
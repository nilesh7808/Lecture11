// Asynchronous Programming

// function fun() {

//     console.log("Inside Fun");

// }

// // Want to create some delay

// function delay() {

//     let x = new Date().getTime();

//     while (new Date().getTime() < 2000 + x) {

//     }
//     fun();

// }

// console.log("Start");

// delay();

// console.log("END");

// ----------------------- ###################################### ------------------------ 

function fun() {

    console.log("Inside Fun");

}

// Want to create some delay

function delay(n) {

    for (let i = 1; i < n; i++) {

        let x = new Date().getTime();

        while (new Date().getTime() < 1000 + x) {

        }

    }

    // fun();

}

console.log("Start");

// delay(2);

// setTimeout(() => {
//     fun();
// }, 2000);
setTimeout(function cb() {
    fun();
    console.log("CallBack");
}, 2000);

const id = setInterval(function() {
    console.log("Called");
}, 1000);

console.log("END");
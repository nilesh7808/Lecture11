// // Promise in js

// let x = new Promise(function(resolve, reject) {

//     let randomnumber = Math.random();
//     if (randomnumber < 0.5) {
//         resolve();
//     } else {

//         reject();

//     }
// });

// x.then(function() {
//     console.log("Resolved");
// })

// .catch(function() {
//     console.log("Rejected");
// })

// let x = new Promise(function(resolve, reject) {

//     let x = 15;

//     if (x > 10) {
//         resolve();
//     } else {
//         reject();
//     }

// });

// x.then(function() {
//     console.log("X is Greater than 12");
//     console.log("Resolve");
// })

// .catch(function() {
//     console.log("reject");
// });

function fun() {


    return new Promise(function(resolve, reject) {

        setTimeout(() => {

            let randomnumber = Math.random();

            console.log(randomnumber);

            if (randomnumber < 0.5) {

                resolve();

            } else {

                reject();

            }

        }, 3000);

    })

}

fun().then(function() {

        console.log("Promise Resolved");

    })
    .catch(function() {
        console.log("Promise Rejected");
    })
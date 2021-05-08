// // Download and uploading process in facebook

// // ###########################################################################################

// //              Bad way of using callback function


// // first it will download the file and will take some time so that we are using setTimeout web API

// function downloadFile(url, downloaded) {

//     console.log(`Your file is ready to Download from ${url}`);

//     setTimeout(() => {

//         const path = url.split("/").pop();

//         downloaded(path);

//     }, 5000);

// }

// // Then it will compressed that file and here also on compressing it will take some time to 
// // compress so here also we will use setTimeout WEB API

// function compressedFile(path, compressed) {

//     const compressedPath = path.split(".")[0] + '.zip';

//     console.log(`Your File is ready to compression for ${path}`);

//     setTimeout(() => {

//         compressed(compressedPath);

//     }, 3000);

// }

// // after compression it will take time to upload so we are also using setTimeoutAPI here

// function uplodaFile(compressedPath, uploaded) {

//     console.log(`Your file is ready to upload as ${compressedPath}`);

//     setTimeout(() => {

//         const uploadedPath = `https://localsystem/${compressedPath}`;

//         uploaded(uploadedPath);

//     }, 3000);

// }

// downloadFile('http://facebook.com/profile.jpg', function(path) {
//     console.log(`Your file is downloaded as ${path}`);
//     compressedFile(path, function(compressedPath) {
//         console.log(`Your file is compressed as ${compressedPath}`);
//         uplodaFile(compressedPath, function(uploadedPath) {
//             console.log(`Your file has been sucessfully uploaded at ${uploadedPath}`);
//             console.log("Everything has been done");
//         });
//     });
// });



// #########################   Better way using promise   ##################################

function downloadFile(url) {

    console.log(`Your file is downloading from ${url}`);

    return new Promise(function(resolve, reject) {

        if (!url.startsWith('http')) {

            throw new Error("Something went wrong!");

        }

        setTimeout(() => {

            const path = url.split("/").pop();

            resolve(path);

        }, 5000);


    })

}

function compressedFile(path) {

    console.log(`Starting file compression for ${path} `);

    return new Promise(function(resolve, reject) {

        setTimeout(() => {

            const compressedPath = path.split('.')[0] + '.zip';

            resolve(compressedPath);

        }, 3000);

    })

}

function uploadFile(compressedPath) {

    console.log(`Your file ${compressedPath} is ready to uploading `);

    return new Promise(function(resolve, reject) {

        setTimeout(() => {

            const uploadedPath = `http://localsystem/${compressedPath} `;

            resolve(uploadedPath);

        }, 3000);

    })

}


// downloadFile("https://facebook.com/profile.jpg")
//     .then(function(path) {
//         console.log(`Your file downloaded successfully as ${path}`);
//         compressedFile(path)
//             .then(function(compressedPath) {
//                 console.log(`Your profile is successfully compressed as ${compressedPath}`);
//                 uploadFile(compressedPath)
//                     .then(function(uploadedPath) {
//                         console.log(`Your file is uploaded to ${uploadedPath}`);
//                     })
//             })
//     })

downloadFile("hp://facebook.com/profile.jpg")
    .then(compressedFile)
    .then(uploadFile)
    .then(function(uploadedPath) {
        console.log(`Your file is uploaded to ${uploadedPath}`);
        console.log("Everything Done");
    })
    .catch(function(e) {
        console.log(e.message);
        console.log("Error");
    })
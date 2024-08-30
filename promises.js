// // promises
// // reject , resolve
// // then and catch blocks synchronously
// function func(val) {
//   return new Promise((reso, rej) => {
//     if (val % 2 == 0) {
//       reso("promise resolved" + "\neven number---->" + " " + val);
//     } else {
//       rej("promise rejected" + "\nodd number---->" + " " + val);
//     }
//   });
// }

// func(2)
//   .then((respo) => console.log(respo))
//   .catch((err) => console.log(err));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//   let recordvideo1 = new Promise((resolve,reject)=>{
//     resolve('video 1 recorded')
//   })
//   let recordvideo2 = new Promise((resolve,reject)=>{
//     resolve('video 2 recorded')
//   })
//   let recordvideo3 = new Promise((resolve,reject)=>{
//     resolve('video 3 recorded')
//   })

//   Promise.all([recordvideo1,recordvideo2,recordvideo3]).then((message)=>console.log(message))

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//// async awit asynchronos with try and catch blocks

function makeRequest(location) {
  return new Promise((resolve, reject) => {
    console.log(`making request to ${location}`);
    if ((location == "Google")) {
      resolve("Google says hi");
    } else {
      reject("we can only talk to Google");
    }
  });
}

function processRequest(response) {
  return new Promise((resolve) => {
    console.log("Processing response");
    return resolve(`Extra Information + ${response}`);
  });
}

// makeRequest("Google")  // pass arguments like Google , FB
//   .then((response) => {
//     console.log("response recieved");
//     return processRequest(response);
//   })
//   .then((processedResponse) => {
//     console.log(processedResponse);
//   })
//   .catch(err=>{
//     console.log(err)
//   })

//   // replacing then and catch blocks with async await

// 1
// async function doWork(){

//     const response = await makeRequest('Google')
//     console.log('Response Received')
//     const processedResponse = await processRequest(response)
//     console.log(processedResponse)
// }
// doWork();

async function doWork(){

    try{
    const response = await makeRequest('Google')
    console.log('Response Received')
    const processedResponse = await processRequest(response)
    console.log(processedResponse)
    }catch(err){
        console.log(err)
    }
}
doWork();



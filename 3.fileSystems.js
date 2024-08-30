// fs module is used to acces files in system
const fs = require("fs");

// console.log(fs) // file systems methods and objects

// // 1.read files
// fs.readFile('./docs/blog1.txt',(err,data)=>{
// if (err) {
//    console.log(err)
// }
// console.log(data.toString())
// })

// console.log('last line')
//// 2. write file    -------------------> this will replace old text with new text

// fs.writeFile('./docs/blog2.txt','Hi Every One',()=>{ // if the file isn't exists it will create one

//         console.log('files was written')

// })

// fs.writeFile('./docs/f/blog2.txt','Hi Every One',(err)=>{
//     if(err){
//         throw ('the folder your trying to access to write is not exist')
//         // console.log(err)
//     }else{
//         console.log('files was written')
//     }
// })

//// 3.append file  -------------------> this won't replace old text with new text,it will add new text to existing text

// fs.appendFile('./docs/blog2.txt',' , hello everyOne',(err)=>{
// if(err){
// console.log(err)
// }else{
//   console.log('data added')
// }
// })

//// 4. create directory

// fs.mkdir("./docs", (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("folder created");
//   }
// });

// fs.mkdir("./docs/assests", (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("folder created");
//   }
// });

// if(!fs.existsSync('./docs/assests') /* 5. check for the folder is present or not */){
// fs.mkdir("./docs/assests", (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("folder created");
//   }
// });
// }else{
//     fs.rmdir('./docs/assests',(err)=>{
//         if(err){
//             console.log(err)
//         }else{
//             console.log('folder deleted')
//         }
//     })
// }

//// 6.delete file

// fs.unlink('./docs/blog.txt',(err)=>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log('file dileted')
//     }
// })

// if (fs.existsSync("./docs/blog.txt")) {

//   fs.unlink("./docs/blog.txt", (err) => {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log("file deleted");
//     }
//   });
// }else{
//     console.log('the file your trying delete does not exist')
// }

//// 7. rename file name

// if (fs.existsSync("./docs/blog#.txt")) {
//   fs.rename("./docs/blog#.txt", "./docs/blog$.txt", (err) => {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log("filename changed successfully");
//     }
//   });
// } else {
//   fs.rename("./docs/blog$.txt", "./docs/blog#.txt", (err) => {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log("filename changed successfully");
//     }
//   });
//   //   console.log('the file your trying to access does not exists')
// }





// fs.writeFile('./blog2.js','console.log("siva")',()=>{ // if the file isn't exists it will create one

//         console.log('files was written')

// })










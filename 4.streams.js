/*
streams 
* streams are used to read the data from the source and write it to destination file.
start using data, before it has finished loading
* streams are used to handle large amount of data
streams and buffers 
*/

const fs= require('fs')

// 1. read stream

// const readStream = fs.createReadStream('./docs/blog3.txt',{encoding:'utf8'})
// readStream.on('data',(chunk)=>{
//     console.log('====================================');
//     console.log(chunk);
//     console.log('------------------------------------');
// })



const readStream = fs.createReadStream('./docs/blog3.txt',{encoding:'utf8'})
const writeStream= fs.createWriteStream('./docs/blog4.txt')

// readStream.on('data',(chunk)=>{
//     // console.log('====================================');
//     // console.log(chunk);
//     // console.log('------------------------------------');

//     writeStream.write('\nNEW CHUNK\n')
//     writeStream.write(chunk)

// })

//// or

readStream.pipe(writeStream)

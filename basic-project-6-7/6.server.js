// run this file open basic-project terminal 
// type --> npm run start6

const http = require("http");
const fs = require("fs");
const _=require('lodash')  
console.log('6.server.js')
// 4. status code


const server = http.createServer((req, res) => {
  console.log("url : " + req.url, "\n method : "   + req.method);

   // lodash
   const num=_.random(0,20)
   console.log("num "+num)

   const greet = _.once(()=>{
    console.log('all the best')
   })
   greet()
   greet()

  // set header content type
  res.setHeader("Content-Type", "text/html");

  let path ='./views/';

  switch (req.url) {
      case '/':
          path +='index.html'
          res.statusCode = 200;
          break;
  
      case '/about':
          path +='about.html'
          res.statusCode = 200;
          break;
      // re-directing
      case '/about-me':  
          res.statusCode = 301;
          res.setHeader('Location', '/about')
          res.end()
          break;
  
      default:
          path +='404.html'
          res.statusCode = 404;
          break;
  }

  fs.readFile(path, (err, data) => {
    if (err) {
      console.log(err);
      res.end();
    } else {
      res.write(data);
      res.end();
    }
  });
});

server.listen(3500, "localhost", () => {
  console.log("listening for request on port 3500");
});


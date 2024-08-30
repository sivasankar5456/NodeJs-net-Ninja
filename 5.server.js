const http = require("http");
const fs = require("fs");

// 1
// http.createServer((req,res)=>{
//     console.log('request made')
// }).listen(3500)


// // 

// const server = http.createServer((req,res)=>{
//     console.log('url : '+req.url,'\n method : '+ req.method)

//     // set header content type
//     res.setHeader('Content-Type','text/html')

//     res.write('<head><link rel="styleSheet" href="#" /></head>')
//     res.write('<p>hello ninjas</p>')
//     res.write('<p>how are you</p>')
//     res.end()

// })

// server.listen(3500,'localhost',()=>{
//     console.log('listening for request on port 3500')
// })
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//// 2

// const server = http.createServer((req, res) => {
//   console.log("url : " + req.url, "\n method : " + req.method);

//   // set header content type
//   res.setHeader("Content-Type", "text/html");

//   fs.readFile("./views/index.html", (err, data) => {
//     if (err) {
//       console.log(err);
//       res.end();
//     } else {
//     //   res.write(data);
//     //   res.end();
//     ////or
//     res.end(data) // if it is single file
//     }
//   });
// });

// server.listen(3500, "localhost", () => {
//   console.log("listening for request on port 3500");
// });

//// 3

// const server = http.createServer((req, res) => {
//     console.log("url : " + req.url, "\n method : " + req.method);
  
//     // set header content type
//     res.setHeader("Content-Type", "text/html");

//     let path ='./views/';

//     switch (req.url) {
//         case '/':
//             path +='index.html'
//             break;
    
//         case '/about':
//             path +='about.html'
//             break;
    
//         default:
//             path +='404.html'
//             break;
//     }
  
//     fs.readFile(path, (err, data) => {
//       if (err) {
//         console.log(err);
//         res.end();
//       } else {
//         res.write(data);
//         res.end();
//       }
//     });
//   });
  
//   server.listen(3500, "localhost", () => {
//     console.log("listening for request on port 3500");
//   });
  
// 4. status code

/*
  status code describe the type of response sent to the browser
      
  Status Codes
    200 - OK (success)
    301 - Resource moved
    404 - Not found
    500 - Internal server error

    *** Status Code Range ****

    * 100 Range - Informationl responses
    * 200 Range - Success codes
    * 300 Range - Codes for redirects
    * 400 Range - User or client error codes
    * 500 Range - Server error codes

  */

const server = http.createServer((req, res) => {
  console.log("url : " + req.url, "\n method : " + req.method);
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


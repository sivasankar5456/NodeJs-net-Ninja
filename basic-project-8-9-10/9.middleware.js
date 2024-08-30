/*
middleware:
Code which runs (on the server) between getting a request and sending a response


                                                MIDDLEWARE

                                        -----------server-----------
                                        |                          |
                                        |                          |
                                        |                          |
request --------------------->----------|----------                |
                                        |          |               |
                                        |          |               |
                                        | code function(middleware)|  // here we can have multiple middlewares we apply middle ware by use method like app.use
                                        |          |               |
                                        |          |               |
response ---------------------<---------|----------                |    
                                        |                          |
                                        |                          |
                                        ----------------------------

while applying middleware order is very important 
if there is a get request we have two middlewares one is before get request another is after get request.
here it execute the one before get request only.  it will ignore after get request so the order is very important
*/ 
/*
MIDDLEWARE EXAMPLES

* Logger middleware to log details of every request
* Authentication check middleware for protected routes
* Middleware to parse JSON data from request
* Return 404 pages


*/ 


// run this file open basic-project terminal
// type --> npm run start9
console.log("9.middleware.js");

const express = require("express");
const morgan = require('morgan')  // ---> it is a third party middleware


// express app
const app = express();

// regisger view engine;
app.set("view engine", "ejs"); // now its gonna know we created templates by ejs and its gonna look into views folder
// if the templates in different folder like public or any other name then follow the steps below
// 1 --> app.set('view engine','ejs')
// 2 --> app.set('views','public') // here use your folder name as seond argument

// listen for request
app.listen(3500, () => {
  console.log("listening for request on port 3500");
});


// app.use((req,res,next)=>{   // here after executing this function , not going to execute next function so we need to use next() function.
//   console.log('new request made')
//   console.log("host: ",req.hostname)
//   console.log("path: ",req.path)
//   console.log("method",req.method)
//   next()
// })

//  middleware and static files

app.use(express.static('public')) /* // this is a express static middleware. 
// here it lets us use external files like stylesheets, images and media files present in public folder 
// without this middleware we can't access external files 
*/
app.use(morgan('dev'));
app.use(morgan('tiny'));

app.get("/", (req, res) => {
  const lorem =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, perspiciatis.";
  const blogs = [
    { title: "silver finds egges", snippet: lorem },
    { title: "chandu finds vegitable", snippet: lorem },
    { title: "siva finds chicken", snippet: lorem },
  ];
 
  res.render("index", { title: "Home", blogs: blogs, lorem});
  });

  app.use((req,res,next)=>{
    console.log('in the next middleware')
    next()
  })
  
  app.get("/about", (req, res) => {
    res.render("about", { title: "About" });
  });
  app.get("/create", (req, res) => {
    res.render("create", { title: "Create" });
  });

  // redirects
  app.get("/about-us", (req, res) => {
    res.redirect("/about");
  });

  // 404 page   --> use this at the bottom only
  app.use((req, res) => {
    res.status(404).render("404", { title: "404" });  // this is 404 error middelware
  });

// run this file open basic-project terminal
// type --> npm run start
console.log("app.js");

const express = require("express");
const morgan = require("morgan"); // ---> it is a third party middleware
const mongoose = require("mongoose");
const blogRoutes = require('./routes/blogRoutes')


// express app
const app = express();
DB_URL = "mongodb://127.0.0.1:27017/node-ninja";

mongoose
  .connect(DB_URL)
  .then(() => {
    console.log("connected to db");
    app.listen(3500, () => {
      console.log("listening for request on port 3500");
    });
  })
  .catch((err) => console.log(err));

// regisger view engine;
app.set("view engine", "ejs"); // now its gonna know we created templates by ejs and its gonna look into views folder

//  MIDDLEWARE and STATIC files
app.use(express.static("public")); /* // this is a express static middleware. 
// here it lets us use external files like stylesheets, images and media files present in public folder 
// without this middleware we can't access external files 
*/
app.use(express.urlencoded({ extended: true }));
/* this middleware  will pass the inputs data we sent into workable formate so we can use, 
and it is gonna attach it to request object which is -->app.post(/blogs(req))
*/
app.use(morgan("dev"));

// ROUTES
//// 1
// app.use(blogRoutes)  // if we give like this it will work for all routes


//// 2
// app.use('/blogs',blogRoutes) 
/*
// if we give like this it will apply for only /blogs path routes. but in our situation the url should be --> /blogs/blogs    then it will work
// the meaning of this is after some path then /blogs it will work

// example:

// /siva/blogs

// here the base is /siva after that if we give like this  --> app.use('/blogs',blogRoutes)

// so after path siva it will go for /blogs 

// */

app.use('/blogs',blogRoutes) // in blogRoutes remove blogs and keep only slash(/) it will work fine

app.get("/", (req, res) => {
  res.redirect("/blogs");  
});

app.get("/about", (req, res) => {
  res.render("about", { title: "About" });
});



// 404 page   --> use this at the bottom only
app.use((req, res) => {
  res.status(404).render("404", { title: "404" }); // this is 404 error middelware
});

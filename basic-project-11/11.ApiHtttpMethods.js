// run this file open basic-project terminal
// type --> npm run start11
console.log("11.ApiHtttpMethods.js");

const express = require("express");
const morgan = require("morgan"); // ---> it is a third party middleware
const mongoose = require("mongoose");
const lodash = require('lodash')
const Blog = require("./model/blog.js");

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
// app.use(morgan('tiny'));

// ROUTES

app.get("/", (req, res) => {
  res.redirect("/blogs");
});

app.get("/about", (req, res) => {
  res.render("about", { title: "About" });
});

// BLOG-ROUTES

app.get("/blogs", (req, res) => {
  Blog.find()
    .then((result) => {
      res.render("index", { title: "All Blogs", blogs: result });
      // console.log(result)
    })
    .catch((err) => {
      console.log("error in --> /blogs");
      console.log(err);
    });
});

app.post("/blogs", (req, res) => {
  // console.log(req.body)
  const blog = new Blog(req.body);
  blog
    .save()
    .then((result) => {
      res.redirect("/blogs");
    })
    .catch((err) => console.log(err));
});

app.get("/blogs/:id", (req, res) => {
  const id = req.params.id;
  console.log("id", id);

  Blog.findById(id)
    .then((result) => {
      res.render('details', { blog: result, title: 'Blog Details' });
      // console.log(result);
    })
    .catch((err) => {
      console.log(err);
    });
});

app.delete("/blogs/:id", (req, res) => {
  const id = req.params.id;

  Blog.findByIdAndDelete(id)
    .then(() => {
      res.json({ redirect: "/blogs" });
    })
    .catch((err) => console.log(err));
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
  res.status(404).render("404", { title: "404" }); // this is 404 error middelware
});

/* upto chapter-7 those are static files to send data dynamically and use it 
 we use view engine it is also called template engine this are something that express app use easily

 view engine let us use the template simlilar to html and also let us use them dynmically by variable ,functions, loops etc..

 there are few options like
 1.express handlebars
 2.pug  // it is quite different from the html 
 3.ejs  // here we are going to use ejs which comes with lot of feature and simple
 4.hbs


 to use above templates install them in your project by using npm install command
*/

// run this file open basic-project terminal
// type --> npm run start8
console.log("8.viewEngine.js");

const express = require("express");

// express app
const app = express();

// regisger view engine;
app.set("view engine", "ejs"); // now its gonna know we created templates by ejs and its gonna look into views folder
// if the templates in different folder like public or any other name then follow the steps below
// 1 --> app.set('view engine','ejs')
// 2 --> app.set('views','public') // here use your folder name as second argument

// listen for request
app.listen(3500, () => {
  console.log("listening for request on port 3500");
});
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
    res.status(404).render("404", { title: "404" });
  });

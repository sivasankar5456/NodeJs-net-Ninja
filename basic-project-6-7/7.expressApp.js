// 7app.js
// express app

// run this file open basic-project terminal 
// type --> npm run start7
console.log('7.expressApp.js')


const express = require("express");

// express app

const app = express();

// listen for request
app.listen(3501, () => {
  console.log("listening for request on port 3501");
});

const RootObj ={ root: __dirname };
app.get("/", (req, res) => {
//   res.send("<h1>Home page</h1>");
     res.sendFile("./views/index.html", RootObj);
});
app.get("/about", (req, res) => {
     res.sendFile("./views/about.html", RootObj);
});


// redirects
app.get('/about-us',(req,res)=>{
    res.redirect('/about')
})

// 404 page   --> use this at the bottom only
app.use((req,res)=>{
    res.status(404).sendFile('./views/404.html', RootObj)
})














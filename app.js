const express = require('express')
const app = express();
const path = require('path');
const fs = require('fs');
const port = 80;

// Express

app.use('/static', express.static("static"));
app.use(express.urlencoded());

// Pug Specific

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, "views"));


app.get("/", (req,res)=>{

    res.render("index.ejs");

})

app.get("/login", (req,res)=>{

    res.render("login.ejs");

})










app.listen(port, ()=>{
    console.log(`The port is running at ${port}`);
});
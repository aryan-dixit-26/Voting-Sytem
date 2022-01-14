const express = require('express')
const app = express();
const path = require('path');
const fs = require('fs');
const port = 80;

// Express

app.use('/static', express.static("static"));
app.use(express.urlencoded());

// ejs Specific

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, "views"));


app.get("/", (req,res)=>{

    res.render("index");

})

app.get("/login", (req,res)=>{

    res.render("login");

})










app.listen(port, ()=>{
    console.log(`The port is running at ${port}`);
});
const { response } = require("express");
const express = require("express");
const app = express();

app.set('view engine', 'ejs')

app.get('/', (req,res)=>{
    res.send("Get Request!")
})

app.get('/home', (req,res)=>{
    res.render("./edu/index")
})

app.get('/signup', (req, res)=>{
    res.render("./auth/signup")
})

app.listen('3000',()=>{
    console.log("Server started at port 3000");
})
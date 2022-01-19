const http = require('http')


http.createServer((req,res)=>{
    res.write("Hello world")
}).listen(5000,()=>console.log("Node is running successfully in the browser"))

const express = require('express')
var app = express()


app.get("/",(req,res)=>{
    res.send("Hello uday")
})

app.listen(4000,()=>console.log("express is running succesfully in the browser"))


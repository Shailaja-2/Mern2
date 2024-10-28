//console.log("hello")

const express=require('express')
const Port = 3000

const app = express()

app.listen(Port, ()=>{
    console.log("Server is running in port :  "+Port)
    console.log(`Server is running in port : ${Port} `)


})
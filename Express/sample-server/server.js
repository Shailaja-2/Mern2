//console.log("hello")

const express=require('express')
const Port = 3000

const app = express()

app.use(express.json())

app.get('/',(req,res)=>{
    res.status(200).json("Hello");
})

app.listen(Port, ()=>{
    //console.log("Server is running in port :  "+Port)
    console.log(`Server is running in port : ${Port} `)


})
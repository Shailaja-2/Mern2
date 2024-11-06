const express=require('express')
const app=express()
const port=3000
const db = require('./config/db')
app.use(express.json())
const Products = require ('./routes/ProductRoute')

// const Users = require('./model/UserModel')
app.get('/',(req,res) =>res.status(200).json({massage:"Welcome"}))
// localhost:3000/
app.use ('/products', Products)
// localhost:3000/Products
app.listen(port, (()=>console.log(`Listening on ${port}`)))
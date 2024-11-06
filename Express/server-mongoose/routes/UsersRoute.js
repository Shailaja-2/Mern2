const express = require('express')
const router = express.Router()
const Users = require('../models/UserModel')

//Method : GET | API URL : localhost:3000/products/all
router.get('/all',async(req,res)=>{
    try {
        const users = await Users.find()
        res.status(200).json(users)
    } catch (error) {
        res.status(500).json({message:error})
    }

})

//Method : POST | API URL : localhost:3000/products/add
router.post('/add',async (req,res)=>{
    try {
        const UserData = new Users(req.boby)
        const { name, email, phone, password, address } = ProductData
        if(!name || !email || !phone || !password || !address){
            res.status(401).json({message: "All fields required"})
        }
        const storedata = await ProductData.save()
        res.status(200).json(storedata)
    } catch (error) {
        res.status(500).json({message: error.message})        
    }
})

module.exports = router
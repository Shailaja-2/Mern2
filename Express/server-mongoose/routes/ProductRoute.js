const express = require('express')
const router = express.Router()
const Products = require('../models/ProductsModel')

router.get('/all',async(req,res)=>{
    try {
        const products = await Products.find()
        res.status(200).json(products)
    } catch (error) {
        res.status(500).json({message:error})
    }

})

module.export = router
//http methods
//1.GET 
//2.Post
//3.put
//4.delete
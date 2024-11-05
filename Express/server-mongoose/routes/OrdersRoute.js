const express = require('express')
const router = express.Router()
const Orders = require('../models/OrdersModel')

router.get('/all',async(req,res)=>{
    try {
        const orders = await Orders.find()
        res.status(200).json(orders)
    } catch (error) {
        res.status(500).json({message:error})
    }

})

module.export = router
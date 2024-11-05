const mongoose=require('mongoose')

const OrdersSchema = new mongoose.Schema({
    orderId: {
        type: Number,
        required:true
    },
    productId: {
        type: Number,
        required:true
        //unique:true
    },
    purchaseAmount: {
        type: Number,
        required:true
    },
    shippingDate: {
        type: Date,
        required:true
    }
})

const Orders=mongoose.model("Orders", OrdersSchema)

module.exports = mongoose
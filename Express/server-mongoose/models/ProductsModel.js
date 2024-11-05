const mongoose=require('mongoose')

const ProductsSchema = new mongoose.Schema({
    name: {
        type: String,
        required:true
    },
    img: {
        type: String,
        required:true
        //unique:true
    },
    price: {
        type: Number,
        required:true
    },
})

const Products=mongoose.model("Product", ProductsSchema)

module.exports = Products;
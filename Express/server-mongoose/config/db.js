const mongoose=require('mongoose')

mongoose.connect('mongodb+srv://SHAILAJA:shailaja%4012345@in-aws.hfan5.mongodb.net/')

const connection=mongoose.connection;



connection.on('connected', () => (console.log("DB Connected")))
connection.on('error', () => (console.log("DB Error")))


module.exports = mongoose
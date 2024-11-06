const mongoose=require('mongoose')

mongoose.connect('mongodb+srv://anagandulashailaja163:shailu123@in-aws.cjiub.mongodb.net/max-store?retryWrites=true&w=majority&appName=In-AWS')

const connection=mongoose.connection;



connection.on('connected', () => (console.log("DB Connected")))
connection.on('error', (error) => (console.log("DB Error" + error)))


module.exports = mongoose
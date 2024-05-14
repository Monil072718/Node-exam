const mongoose = require('mongoose')

const url = 'mongodb+srv://patelmonil7908:Oh8SVH2X16DSKTBO@cluster0.hnpclfu.mongodb.net/mydb'

const dbConnection = async () => {
    try {
        await mongoose.connect(url)
        console.log('Database Connected')
    } catch (error) {
        console.log(error)
    }
}
module.exports = dbConnection;
const express = require('express');
const dbConnection = require('./config/db');
const catRouter = require('./routes/categoryRoute');
const proRouter = require('./routes/productRoute');
const userRouter = require('./routes/userRoute');
const app = express()
const PORT = 8000

// setViewEngine
app.set('view engine', 'ejs')
app.set('views', 'src/views')

// middlewares
app.use(express.static('public'))
app.use(express.urlencoded({ extended: false }))

// server
dbConnection()

// Routes
app.use('/category', catRouter)
app.use('/product', proRouter)
app.use('/user', userRouter)

app.get('/', (req, res) => {
    res.render('Pages/index')
})

app.listen(PORT, (err) => {
    if (err) {
        console.log(err)
    } else {
        console.log(`server listening on port http://localhost:${PORT}`)
    }
})

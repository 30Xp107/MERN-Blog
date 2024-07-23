import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import userRoutes from './routes/user.route.js'
import authRoutes from './routes/auth.route.js'
import cors from 'cors'
import cookieParser from 'cookie-parser'

dotenv.config()

// const MongoConn = process.env.MONGO_URL || process.env.MONGO_LOCAL

mongoose.connect(process.env.MONGO_URL)
    .then(() => {
        console.log('MongoDb is connected')
    }).catch((err) => {
        mongoose.connect(process.env.MONGO_LOCAL)
        .then(() => {
            console.log('MongoDb is connected')
        }).catch((err) => {
            console.log(`Internet Connection Problem: ${err}`)
        })
})

const app = express()

app.use(cors())
app.use(express.json()) 
app.use(cookieParser())

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})

app.use('/api/user', userRoutes)
app.use('/api/auth', authRoutes)

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500
    const message = err.message || 'Internal Server Error'
    res.status(statusCode).json({
        success: false,
        statusCode,
        message
    })
})

//5:16:21
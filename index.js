import express from 'express'
import mongoose from 'mongoose'
import config from 'config'
import cors from 'cors'

import studyRouter from './route/study.routes.js'

const app = express()

const PORT = config.get('port.1') || config.get('port.2')

app.use(express.json())
app.use('/uploads', express.static('uploads'))
app.use('/images', express.static('images'))
app.use(cors())


const start = async () => {
    try {
        await mongoose.set('strictQuery', true)
        await mongoose.connect(config.get('mongodbUrl'))
        console.log(`database OK\tname: ${mongoose.connection.name}`)
    } catch (error) {
        console.log(`database ERROR\tcodename: ${error.codeName}`)
    }

    app.use('/api/study', studyRouter)

    app.listen(PORT, (error) => {
        if(error) {
            console.log(`server ERROR`)
        }
        console.log(`server OK\tport: ${PORT}`)
    })
}

start()
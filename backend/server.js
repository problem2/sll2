const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()

const handle = require('./routehand')

mongoose.connect('mongodb+srv://admin:root@cluster0-pqvyg.mongodb.net/test?retryWrites=true&w=majority',{
    useNewUrlParser : true
}).then(()=>{
    console.log('Database Connected ')
},
error => {
    console.log('Database could not Connect '+ error)
}
)
app.use(cors())
app.use(express.json())
app.use('/post',handle)

const PORT = 4000
app.listen(PORT ,()=>
    console.log("listening"))
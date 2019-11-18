const express = require('express')
const router = express.Router()
router.use(express.json())

const schema = require('./schema')

router.post('/',(req,res)=>{
    const s = new schema({
        name : req.body.name,
        disc : req.body.disc,
        id : req.body.id
    })
    s.save()
})

router.get('/', async (req,res) => {
    try{
        const com = await schema.find()
        console.log(com)
        res.json(com)
    }
    catch(err){
        console.log(err)
        console.error("Madarchod mangal")
    }
})
module.exports = router
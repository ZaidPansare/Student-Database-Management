const express = require('express')
const mongoose = require('mongoose')
const UserModel = require('./student')
const cors = require('cors')

const app = express()
const port = 3001

app.use(cors())
app.use(express.json())

mongoose.connect('mongodb://127.0.0.1:27017')
.then(()=>console.log("DB is connected"))
.catch((err)=>console.log(err))

app.post('/create',(req,res)=>{
    UserModel.create(req.body)
    .then(result=>res.json(result))
    .catch((err)=>console.log(err))
})

app.get('/',(req,res)=>{
    UserModel.find()
    .then(result=>res.json(result))
    .catch((err)=>res.json(err))
})

app.get('/get/:id',(req,res)=>{
    const id = req.params.id;
    UserModel.findById({'_id':id})
    .then(users=>res.json(users))
    .catch(err=>res.json(err))
})

app.put('/edit/:id',(req,res)=>{
    const id = req.params.id;
    UserModel.findByIdAndUpdate({'_id':id},{name:req.body.name, age:req.body.age, phone:req.body.phone, address:{state:req.body.address.state, district:req.body.address.district, area:req.body.address.area, pincode:req.body.address.pincode}, image:req.body.image})
    .then(users=>res.json(users)) 
    .catch(err=>res.json(err))
})



app.delete('/delete/:id',(req,res)=>{
    const id = req.params.id;
    UserModel.findByIdAndDelete({'_id':id})
    .then(users=>res.json(users))
    .catch(err=>res.json(err))
})


app.listen(port,()=>{
    console.log("Server is Created")
})



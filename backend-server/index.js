const express = require('express')
const app = express()
const port = 3000
const mongoose = require('mongoose')
const cors = require('cors')




app.use(express.json());
app.use(cors())

mongoose.connect('mongodb+srv://Sankalp:1234@nodeprojects.hrkgda2.mongodb.net/AiwaDB')


const Product = mongoose.model('Product',{
    id:{
        required:true,
        type:Number
    },
    name:{
        required:true,
        type:String
    },
    description:{
        required:true,
        type:String
    },
    category:{
        required:true,
        type:String
    },


})

app.post('/addproduct',async(req,res)=>{
    
    let products = await Product.find({})
    let id
    console.log(products);
    if (products.length>0) {
        let last_product_arry = products.slice(-1)
        let last_product = last_product_arry[0]
        id = last_product.id + 1;
        }
    else{
        id=1
    }
    const product = new Product({
        id:id,
        description:req.body.description,
        name:req.body.name,
        category:req.body.category,
    })
    await product.save()

    res.json({
        success:true
    })
})

app.post('/removeproduct',async(req,res)=>{
    await Product.findOneAndDelete({id:req.body.id})
    console.log("Removed");
    res.json({
        success:true,
        name:req.body.name
    })
})

app.get('/allproducts',async(req,res)=>{
    let products = await Product.find({})
    res.json(products)
})

app.get('/',(req,res)=>{
    res.send("Start")
})
app.listen(port,()=>{
    console.log(`Server staring on ${port}`);
})



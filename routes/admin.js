const path=require('path')
const express=require('express')
const router=express.Router()


router.get('/add-products',(req,res,next)=>{
    res.sendFile(path.join(__dirname,'../','views','add-product.html'))
})
router.post('/add-products',(req,res,next)=>{
    res.redirect('/')

})

module.exports=router

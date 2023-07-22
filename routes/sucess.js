const path=require('path')
const express=require('express')

const router=express.Router()

router.get('/message',(req,res,next)=>{
    res.send("sucess")

})
module.exports=router
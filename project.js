const express=require('express')
const bodyParser=require('body-parser')
const path=require('path')
const app=express()
const admin=require('./routes/admin')
const shop=require('./routes/shop')
const contactt=require('./routes/contact')
const sucess=require('./routes/sucess')
app.use(bodyParser.urlencoded({extended:false}))

app.use(admin)
app.use(shop)
app.use(contactt)
app.use(sucess)

app.use((req,res,next)=>{
    res.status(404).sendFile(path.join(__dirname,'views','pagenot.html'))
})
app.listen(3000)

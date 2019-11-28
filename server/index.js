const express = require('express')

const app = express()

app.use(express.json())
app.use(require('cors')())

const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/article',{
    useCreateIndex:true,
    useFindAndModify:true,
    useCreateIndex:true
})

const Article = mongoose.model('Article',new mongoose.Schema({
    name:{ type : String },
    text:{ type : String }
}))

app.get('/',(req,res)=>{
    res.send('index')
})

//新增文章接口
app.post('/api/articles', async ( req,res )=>{
    // console.log(req)
    let result = await Article.create( req.body )
    console.log(result)
    res.send(result)
})


//文章列表查询接口
app.get('/api/articlelists', async ( req,res )=>{

    let result = await Article.find()

    res.send(result)
})

// 删除文章
app.delete('/api/articles/:id',async ( req,res )=>{
    let result = await Article.findByIdAndDelete(req.params.id)
    res.send({
        status:true
    })
})

//查询文章
app.get('/api/articles/:id', async ( req,res )=>{
    let result = await Article.findById(req.params.id)
    res.send(result)
})
//编辑文章
app.put('/api/articles/edit/:id', async ( req,res )=>{
    let result = await Article.findByIdAndUpdate(req.params.id,req.body)
    res.send(result)
})

app.listen(3001,()=>{
    console.log("http://localhost:3001/")
})
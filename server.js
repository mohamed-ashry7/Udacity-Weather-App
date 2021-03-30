

let projectData = {}
const express = require('express')
const app  = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const { static } = require('express')
const PORT = 8000

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use(cors())


app.use(express.static('website'))

app.get('/retrieveData',(req,res)=>{
    console.log(projectData)
    res.send(projectData)
})


app.post('/addNewTemp',(req,res)=>{
    projectData = {
        temperature:req.body.temperature,
        date:req.body.date,
        userResponse:req.body.userResponse
    }
    
    res.sendStatus(200)
})




app.listen(PORT,()=>{
    console.log("THE SERVER IS RUNNING ON PORT " +PORT+" YAAAAYY." )
})


const projectData = [] 
const express = require('express')
const app  = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const PORT = 8000

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use(cors())



app.get('/getAllprojectData',(req,res)=>{
    res.send(projectData)
})


app.post('/addNewprojectData',(req,res)=>{
    projectDataObject = {
        temperature:req.body.temperature,
        date:req.body.date,
        userResponse:req.body.userResponse
    }
    projectData.push(projectDataObject)
    res.send
})




app.listen(PORT,()=>{
    console.log("THE SERVER IS RUNNING ON PORT " +PORT+" YAAAAYY." )
})
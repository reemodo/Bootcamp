const express = require("express")
const path = require("path")
const wordCounter = {"reem":10}
const bodyPraser = require('body-parser')

//creating App and lunching method
const port = 3000
const app = express()
app.use(bodyPraser.json())
app.use(bodyPraser.urlencoded({ extended: false }))

app.listen(port, function(){
    console.log(`Node server created at port ${port}`)
})


// Get route 
app.get('/sanity', function(req, res){
    res.send( `Server is up and running`)
})

app.get('/:text',function(req,res){
    const word = req.params.text
    if (wordCounter[word])
        res.send({count : wordCounter[word]})
    else
        res.send({count : 0})
})

//Post route
app.post('/',function(req,res){
    const word = req.body.word
    wordCounter[word] = wordCounter[word] + 1 || 1
  res.send({text: `Added ${word}`, currentCount: wordCounter[word] }  )
})

//Delete route
app.delete('/:text',function(req,res){
    const word = req.params.text
    if(wordCounter.length == 0)
        res.send("Alraedy empty") 
    else if (!wordCounter[word])
        res.send("This word not exist ") 
    else{
        delete wordCounter[word]
        res.send(`This  word: ${word} deleted `) 
    }
})
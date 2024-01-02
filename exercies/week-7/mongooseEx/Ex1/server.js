// Server setup
const express = require('express')
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// Mongoose setup
const mongoose = require('mongoose')
const Schema = mongoose.Schema
mongoose.connect("mongodb://127.0.0.1:27017/peopleDB", {
  useNewUrlParser: true,
}).catch((err)=> console.log(err))
// Schema/model setup
const personSchema = new Schema({
    firstName: { type: String, required: true },
    lastName: String,
    age: Number
})
const Person = mongoose.model("person", personSchema)

//Routes
app.get('/people', function (req, res) {
    Person.find({}).then( function (people) {
        res.send(people)
    })
})
app.put('/person/:id', function (req, res) {
    const personId = req.params.id
    Person.findByIdAndUpdate(personId,  { age: 80 }, { new: true }).then( function (person) {
        console.log(person)
    })
    res.end()
})
app.post('/person', function (req, res) {
    const personData = req.body.person
    const newPerson = new Person (personData)
    newPerson.save() 
    res.end()
})
app.delete('/apocalypse', function (req, res) {
    Person.deleteMany().then(function(){
        console.log("Data deleted"); // Success
    }).catch(function(error){
        console.log(error); // Failure
    });
    Person.find({}).then( function (people) {
        console.log(people)
    })
    res.end()
})

const port = 4200
app.listen(port, function () {
    console.log(`Running on port ${port}`)
})
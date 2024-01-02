// A Solar System with:
// planets (an array of Planet objects)
// starName (a String)
// A Planet with:
// name (String)
// system (System object)
// visitors (array of Visitor objects)
// A Visitor with:
// name (String)
// homePlanet (Planet object)
// visitedPlanets (array of Planet objects)
// Mongoose setup
const mongoose = require('mongoose')
const Schema = mongoose.Schema
mongoose.connect("mongodb://127.0.0.1:27017/SolarSystemDB", {
  useNewUrlParser: true,
}).catch((err)=> console.log(err))
// Schema/model setup
const solarSystemSchema = new Schema({
    planets: [{type: Schema.Types.ObjectId, ref: 'planet'}],
    starName: String
})
const SolarSystem = mongoose.model("solarSystem", solarSystemSchema)

const planetSchema = new Schema({
    system: [{type: Schema.Types.ObjectId, ref: 'solarSystem'}],
    name: String,
    visitors: [{type: Schema.Types.ObjectId, ref: 'visitor'}]
})
const Planet = mongoose.model("planet", planetSchema)

const visitorSchema = new Schema({
    name: String,
    homePlanet:{type: Schema.Types.ObjectId, ref: 'planet'} ,
    visitedPlanets: [{type: Schema.Types.ObjectId, ref: 'planet'}]

})
const Visitor = mongoose.model("visitor", visitorSchema)
const vistorList = []
Planet.find({}).populate("visitors").then(function(res){ 
    res.forEach(planet => planet.visitors.length > 0? vistorList.push(planet.visitors[0]):null )
    console.log(vistorList)})
Planet.findById("65947fa5aad18e96a6ee85ce").populate("visitors").then(function(planet){ 
    planet.visitors.length > 0? console.log(planet.visitors):null 
    })
SolarSystem.findById("65947fa5aad18e96a6ee85d1").populate({
    path: 'planets',
    populate: {
        path: 'visitors'}
    }).then(function(res){ 
    res.planets.forEach(planet => planet.visitors.length > 0? vistorList.push(planet.visitors[0]):null )
    console.log(vistorList)})

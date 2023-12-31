const express = require("express")
const app = express()
const path = require('path')
const store = [
    { name: "table", inventory: 3, price: 800 },
    { name: "chair", inventory: 16, price: 120 },
    { name: "couch", inventory: 1, price: 1200 },
    { name: "picture frame", inventory: 31, price: 70 }
]

app.get('/priceCheck/:name', function(req, res){
    const name = req.params.name
    const wantedStore = store.find(s => s.name == name)
    if(req.query.admin === "true")
        wantedStore.price = wantedStore.price-(wantedStore.price * (50/100) ) ;
    res.send( ` ${wantedStore.price}`)
})
app.get('/buy/:name', function(req, res){
    const name = req.params.name
    const wantedStore = store.find(s => s.name == name)
    if(req.query.admin === "true")
        wantedStore.price = wantedStore.price-(wantedStore.price * (50/100) ) ;
    wantedStore.inventory -= 1
    res.send( `Congratulations, you’ve just bought ${wantedStore.name} for ${wantedStore.price}. There are ${wantedStore.inventory} left now in the store.`)
    
})

app.use(express.static(path.join(__dirname, '.', 'dist')))
app.use(express.static(path.join(__dirname, '.', 'node_modules')))
const port = 3000
app.listen(port, function () {
    console.log(`Node server created at port ${port}`)
})
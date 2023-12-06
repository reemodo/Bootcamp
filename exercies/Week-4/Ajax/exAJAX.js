const fetch = function (petName){
    $.get("https://ele-people-api-8eb0b1bd9b96.herokuapp.com/pets", function(response){
         console.log(response.find(pet => pet.name === petName && pet.owner === "Rebecca Parker" ).neutered)
    })
    
}

const personsList = function(data){
    let person = data.find( p => p.name.first === "Rebecca")
    let pet = person.family.pets[0].name
    fetch(pet)
}

$.get("https://ele-people-api-8eb0b1bd9b96.herokuapp.com/people",personsList)


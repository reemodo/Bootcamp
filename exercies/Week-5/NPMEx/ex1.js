//Ex. 1
//Check whether "shoobert@dylan" is a valid email (should be false)
var validator = require('validator');
const { faker } = require('@faker-js/faker');


console.log(validator.isEmail('shoobert@dylan'));

//Ex. 2
//Check whether "786-329-9958" is a valid US mobile phone number (should be true) - use the en-US locale
console.log(validator.isMobilePhone("786-329-9958","en-US"))
//Ex. 3
//Use the following blacklist
let blacklist = ["!", "?", ".", "@", "~", ",", "'"]
//Along with validator's `blacklist` method to clean this text:
let text = "I'M SO EXCITED!!!~!"
//Ultimately, it should print "im so excited
console.log(validator.blacklist(text, blacklist))

// const hello =  function(){
//     urllib.request('http://www.omdbapi.com/?apikey=3ddb2420&t=The_Lion_King', function (response){
//     console.log(response)})}
//   setTimeout(hello,5000)

const createRandomUsers = function(){
    const firstName = faker.person.firstName();
    const lastName = faker.person.lastName();
    const avatar= faker.image.avatar();
    const compenyName = faker.company.name();
    return {firstName, lastName, avatar, compenyName}
  }
  

const makeHuman = function(number){
    for(let i = 0; i< number; i++){
       let user = createRandomUsers()
       console.log(user)
    }
}
makeHuman(2)
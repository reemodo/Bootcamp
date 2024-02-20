/*Exercise 1

To complete our stardom, write a function called printStarSeries that receives two parameters: num, and count
This function should continue to print the stars normally then backwards for as many times as count, for example:
printStarSeries(5, 3)
//should print the following:
    
*
**
***
****
*****
****
***
**
*
    
*
**
***
****
*****
****
***
**
*
    
*
**
***
****
*****
****
***
**
*
Target complexity: O(mn)*/
const paramidStart = function (num){
	for(let i =0 ; i < num; i++){
        let s = ""
	for(let j = 0; j<= i; j++)
	s+="*"
	console.log(s)
}
}
const reversParamidStar = function (num){
	for(let i =num ; i > 0; i--){
        let s = ""
	for(let j = 0; j< i; j++)
	s+="*"
	console.log(s)
}
}
const printStarSeries = function (num, count){
	for(let i = 0; i< count;i ++){
		paramidStart(num);
        reversParamidStar(num-1)
}
}
printStarSeries(5, 3)
/*
Exercise 2

Write some code that takes a string and reverses it:
const reverse = function(str){
        
  let reversed = //your code
  //more code..or not - it's possible to do this in one line ;)
  return reversed
}
    
reverse("dog") //should return "god"
reverse("race car") //should return "rac ecar"
Obviously, do not use JavaScript’s built in reverse function ;)
Target complexity: O(n)
*/


const reverseString = function(str){
        
  let reversed = ""
	for(let i = str.length-1 ; i >= 0;i--){
		reversed += str.charAt(i)
	}
  return reversed
}
    
console.log(reverseString("dog")) //should return "god"
console.log(reverseString("race car")) //should return "rac ecar"

/*
Exercise 3

Write a function that receives a string and finds the first non-repeating character in the string.
for example :
“aabbccdee” will return “d”
“abca” will return “b”
Target complexity: O(n)
*/

const findFirstNonRepeatingChar = function (str){
	let charsMap = {}
	for(let i =0; i < str.length; i++ ){
		if(charsMap[str.charAt(i)])
		    charsMap[str.charAt(i)] += 1
		else
			charsMap[str.charAt(i)] = 1
	}
	for(let i =0; i < str.length; i++ ){
		if( charsMap[str.charAt(i)] === 1){
			return str.charAt(i) ;
		}
	}
}
findFirstNonRepeatingChar("abca")

/*
Exercise 4

Write a function called encrypt that receives a string and encrypts it by shifting every letter in the string by one to the right (in the English alphabet).
For instance, encrypt(cat) should return dbu because
The letter d comes after c
The letter b comes after a
The letter u comes after t
Target complexity: O(n)

*/

function encrypt(str) {
	let encryptedString = ""
	for(let i = 0; i< str.length; i++){
		encryptedString += String.fromCharCode(str.charCodeAt(i)+1)
	}
	return encryptedString
	
}
console.log(encrypt("cat"))

/*
Exercise 5

Write a function called jumble that receives two arrays, and returns a third that is a jumbled form of the first two:
const colors = ["red", "indigo", "white", "teal", "yellow"];
const foods = ["bread", "cheese", "cucumber"];
    
const jumble = function (arr1, arr2) {
  let jumbledArr = //work with arr1 and arr2
  return jumbledArr
}
    
jumble(colors, foods) 
// could return: ["cheese",teal","cucumber","red","bread","yellow","white","indigo"]
Note that the new array should have no duplicates.


*/
const colors = ["red", "indigo", "white", "teal", "yellow"];
const foods = ["bread", "cheese", "cucumber"];
    
// const jumble = function (arr1, arr2) {
//   let jumbledArr = []
// 	for(int i = 0, ; i< arr1.length + arr2.length; i++)}{
		
// 	}
//   return jumbledArr
// }
    
// jumble(colors, foods) 
// could return: ["cheese",teal","cucumber","red","bread","yellow","white","indigo"]

/*
Exercise 6

Given the following data:
const rawDist = {
        A: 60,
        B: 10,
        C: 10,
        D: 20
}
Write a function getLetter such that there is a 60% chance of getting A, 10% chance of getting B, etc.
Hint: Math.random is your friend.
Target complexity: O(n)

*/

function getLetter(){
	 const rawDist = {
        A: 60,
        B: 10,
        C: 10,
        D: 20
    };

    let rand = Math.random() * 100; // Generate a random number between 0 and total probability

    // Iterate through the distribution object to find the appropriate letter
    for (const letter in rawDist) {
        rand -= rawDist[letter]; // Subtract each letter's probability from the random number
        if (rand <= 0) {
            return letter; // Return the letter once the random number falls within its probability range
        }
    }

    return 'E';
}

getLetter()
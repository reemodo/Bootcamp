
const form = document.getElementById("form")
console.log("print")
const addError = function(value){
    let error = document.createElement("p")
    error.setAttribute("class","error")
    error.style.color = "red"
    error.innerHTML = value
    form.appendChild(error)
}
const saveData = function (){
    let errors = document.getElementsByClassName("error") 
    for(error of errors)
    error.style.display = "none"
    let name = document.getElementById("name").value
    let salary = parseInt(document.getElementById("salary").value)
    let birthday = document.getElementById("birthday").value
    let phone = document.getElementById("phone").value
    let valid = true
    if (name.length <= 2){
        valid = false
        addError("Name must be longer than 2 characters")
    }
    if(isNaN(salary)){
        valid = false
        addError("salary is missing")
    }
    else if (salary < 10000 || salary > 16000){
        valid = false
        addError( "Salary must be greater than 10,000 but less than 16,000")
    }
    if("" == birthday){
        valid = false
        addError("Birthday may not be null")
    }
    if(phone.length != 10){
        valid = false
        addError("Phone must be 10 digits long")
    }
    if (valid){
        form.style.display = "none"
        let helloTxt = document.createElement("h1")
        helloTxt.style.color = "green"
        helloTxt.innerHTML = "Weelcome!"
        document.body.appendChild(helloTxt)
    }

}

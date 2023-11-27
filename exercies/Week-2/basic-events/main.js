const box = document.getElementById("box")
const list = document.getElementById("list")
const enterColor = function () {
    box.style.backgroundColor = "#c0392b"
    box.innerHTML = "AHH GO AWAY"
}

const leaveColor = function () {
    box.style.backgroundColor = "#1abc9c"
    box.innerHTML = "Hover over me!"
}
const onclickColor = function (){
    box.style.backgroundColor = "#8e44ad"
}
const addItem = function(){
    const item = document.createElement("li")
    item.innerHTML = "A new item"
    item.setAttribute("onClick", "addItem()")
    list.appendChild(item)
}
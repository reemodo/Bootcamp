document.getElementById("header").style.color = "red"
const header = $("h1")
const redDiv = $(".red-div")
header.css("color","blue")
redDiv.css("color","red")
$("li:first-child").css("color","pink")
$(".feedme").on("click", function(){ //use template literals and $(this)
    let divCopy = "<div class='feedme'>"+ $(this).text() +"</div>"
    $("body").append(divCopy)
  })
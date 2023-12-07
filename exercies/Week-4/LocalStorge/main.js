const wisdom = JSON.parse(localStorage.wisdom || "[]")
let id = wisdom.length
console.log(wisdom)
const render = function(){
    $("#posts").empty()
    const postsLists = {wisdom}
    const source = $('#postText').html();
    const template = Handlebars.compile(source);
    const newHTML = template(postsLists);
    $("#posts").append(newHTML)
    }
render()

$("#post").click(function (){
    const inputText = $('#input').val()
    wisdom.push({"text":inputText, "id":id})
    id += 1
    if (wisdom.length % 2 === 0){
        localStorage["wisdom"] = JSON.stringify(wisdom)
    }
    render()
})
$(".delete-post").on("click",function(){
    console.log("hello")
})



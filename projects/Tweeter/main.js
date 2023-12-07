const tweeter = Tweeter()
const renderer = Renderer()
tweeter.addPost("First post!")
tweeter.addPost("Aw man, I wanted to be first")
  
tweeter.addComment("p1","First comment on first post!")
tweeter.addComment("p1","Second comment on first post!!")
tweeter.addComment("p1","Third comment on first post!!!")
renderer.renderPosts(tweeter.getPosts())
let post = $("#posts")
let wisdom = []

$("#post").click(function (){
    tweeter.addPost($('#input').val()) 
    renderer.renderPosts(tweeter.getPosts())
    wisdom.push({"text":$('#input').val()})
    if (wisdom.length % 2 === 0){
        localStorage.setItem("wisdom" , (JSON.stringify(wisdom)))
        console.log(localStorage["wisdom"])
    }
})

post.on("click","#deletePostButon",function (){
    tweeter.removePost($(this).closest("div").data().id) 
    renderer.renderPosts(tweeter.getPosts())})


post.on("click","#addCommentsButton",function (){
    let postId = $(this).closest("div").data().id
    let commentText = $(this).closest("div").find("#commentInput").val()
    tweeter.addComment(postId, commentText)
    renderer.renderPosts(tweeter.getPosts())})

post.on("click", "spin", function () {
    let postId = $(this).closest("div").data().id
    let commentId = $(this).closest('li').data().id
    tweeter.removeComment(postId, commentId)
    renderer.renderPosts(tweeter.getPosts())
    })
  



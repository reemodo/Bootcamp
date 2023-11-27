const postsList = $("#posts")
const printComments = function(comments){
    let addedHtml = ""
    for (let comment of comments)
        addedHtml += "<li>"+ comment.text +"</li>"
    return  addedHtml
}
const printPosts = function(post){
    postsList.append("<div> <p>"+ post.text +"</p> <lu>"+ printComments(post.comments)+"</lu><div>")
}
const removePostsEleement = function(){
    postsList.empty()
}
const Renderer = function(posts){
    const renderPosts = function(posts){
        removePostsEleement()
        for(let post of posts){
            printPosts(post)
        }
    }
    return{
        renderPosts
    }
}

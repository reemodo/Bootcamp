// $("body").append("<input type='text' id='text' >")
// $("body").append("<input type='button' value='button' id='button'>")
// $("#button").click(function (){
//     $("#addingList").append("<li class='name'>" + $('#text').val() + "</li>")
// } )
// $('body').on('click','.name', function(){
//     $('.name').click($(this).remove())
// })



// $('body').append('<div class="box" > </div> <div class="box"> </div>')
// $('body').on("hover",
//     $(".box").hover(function(){
//         $(".box").css("background-color", "green");
//         $(this).css("background-color", "#8e44ad");
//     }, function(){
//         $(".box").css("background-color", "#8e44ad");
// }))
$(".helo").on("click",console.log($(this)))
 $(".item").click(function(){
    let self0 = $(this)
    console.log("hi" + $(this))
    
    // console.log($(this).data())
     console.log(self0.class)
    // validChanges(this,data)
})
validChanges = function(obj,data){
    if ($(obj).data("data_instock") === true){
        $('body').append('<div >'+ $(obj).text()+'</div> ');}
        else {console.log($(obj).data());}
}
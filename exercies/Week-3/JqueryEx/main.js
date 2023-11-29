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




 $(".item").click(function(){
    if ($(this).data().instock === true){
        $('body').append('<div >'+ $(this).text()+'</div> ');}  
})

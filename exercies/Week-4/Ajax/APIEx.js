// const fetch = function (isbn) {
//     $.ajax({
//         method: "GET",
//         url: `https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}`,
//         success: function (data) {
//             console.log(data)
//         },
//         error: function (xhr, text, error) {
//             console.log(text)
//         }
//     })
// }

// const fetch = function (queryType ,queryValue ) {
//     $.ajax({
//         method: "GET",
//         url: `https://www.googleapis.com/books/v1/volumes?q=${queryType}:${queryValue}`,
//         success: function (data) {
//             console.log(data)
//            data.items.forEach(book => {
//                 console.log(book.volumeInfo.title + " ->" + book.volumeInfo.authors + "->" + (book.volumeInfo.industryIdentifiers? book.volumeInfo.industryIdentifiers[0].identifier: "Nth"))
//            });
//         },
//         error: function (xhr, text, error) {
//             console.log(text)
//         }
//     })
// }
// fetch("isbn", 9780575087057)
// fetch("title", "How to Win Friends and Influence People")

// url = "https://api.giphy.com/v1/stickers/search?api_key=BbapDliSM0MOwoZWKlELEHVepw9UfKKU&q=cat&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips"

// const fetch = function () {
//     $.ajax({
//         method: "GET",
//         url: url,
//         success: function (response) {
//             // console.log(data)
//             response.data.forEach(img => {
//             // console.log(img.url)
//                 $("body").append("<iframe src='"+img.embed_url+"'/>")
//             });
//         },
//         error: function (xhr, text, error) {
//             console.log(text)
//         }
//     })
// }


 
const fetch = function (input) {
    $.ajax({
        method: "GET",
        // url : "https://api.giphy.com/v1/stickers/search?api_key=BbapDliSM0MOwoZWKlELEHVepw9UfKKU&q="+input+"&type=gif&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips",
        url : "https://api.giphy.com/v1/gifs/search?api_key=BbapDliSM0MOwoZWKlELEHVepw9UfKKU&q=cat&lang=en&limit=20",
        success: function (response) {
            // console.log(data)
            response.data.forEach(img => {
            // console.log(img.url)
            
                $(".gifsContainer").append("<iframe src='"+img.embed_url+"'/>")
            });
        },
        error: function (xhr, text, error) {
            console.log(text)
        }
    })
}
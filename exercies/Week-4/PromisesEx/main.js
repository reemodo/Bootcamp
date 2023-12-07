// function getData() {
//     return new Promise((resolve, reject) => {
//       fetch('https://random-word-api.herokuapp.com/word')
//         .then(response => {
//           if (response.ok) {
//             return response.json();
//           }
//           throw new Error('Request failed');
//         })
//         .then(data => {
//           resolve(console.log(data));
//         })
//         .catch(error => {
//           reject(error);
//         });
//     });
//   }
const renderHtml = function(booksList){
    console.log(booksList)
    const booksArray = booksList.items
    const books = {booksArray}
    const source = $('#bookList').html();
    const template = Handlebars.compile(source);
    const newHTML = template(books);
    $("#booksContainer").append(newHTML)
}
const bookApiCall = function(randomWord){
    return new Promise((resolve, reject) => {
    $("#booksContainer").empty()
    $("#booksContainer").append(`<h1>${randomWord}</h1>`)
    fetch(`https://www.googleapis.com/books/v1/volumes?q=intitle:${randomWord}`)
    .then(response2 => {
            if (response2.ok) {
              return response2.json();
            }
            throw new Error('Request failed');})
    .then(booksList => resolve(renderHtml(booksList)))
    .catch(error => {
        reject(error);
    });
})

}

const gifApiCall = function (randomWord) {
    return  $.ajax({
        method: "GET",
        url : `https://api.giphy.com/v1/gifs/search?api_key=BbapDliSM0MOwoZWKlELEHVepw9UfKKU&q=${randomWord}&lang=en&limit=1`,
        // url: `https://api.giphy.com/v1/stickers/random?api_key=BbapDliSM0MOwoZWKlELEHVepw9UfKKU&tag=${randomWord}&lang=en&limit=1`,
        success: function (response) {
            $("#booksContainer").append("<iframe src='"+response.data[0].embed_url+"'/>")
            // $("#booksContainer").append("<iframe src='"+response.data.embed_url+"'/>")
        },
        error: function (xhr, text, error) {
            console.log(error)
        }
    })
}
function getData() {
    return new Promise((resolve, reject) => {
        fetch('https://random-word-api.herokuapp.com/word')
        .then(bookApiResponse => {
            if (bookApiResponse.ok) {
            return bookApiResponse.json();
            }
            throw new Error('Request failed');
        })
        .then(randomWord => 
        Promise.all(bookApiCall(randomWord),gifApiCall(randomWord)))
        .then(
            resolve(console.log(true))
        )
        .catch(error => {
          reject(error);
        });
    
}
    )}


// function getData() {
//     return new Promise((resolve, reject) => {
//       fetch('https://random-word-api.herokuapp.com/word')
//         .then(bookApiResponse => {
//           if (bookApiResponse.ok) {
//             return bookApiResponse.json();
//           }
//           throw new Error('Request failed');
//         })
//         .then(randomWord =>{
//             resolve( bookApiCall(randomWord))
//         })
//         .catch(error => {
//           reject(error);
//         });
    
// }
//     )}
    





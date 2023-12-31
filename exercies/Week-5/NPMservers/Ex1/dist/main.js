const fetchStoreData = function () {
    let input = $("#store-input").val()

    $.get(`priceCheck/${input}/?admin=true`, function (storeData) {
        $("body").append(`<div>${storeData} `)
    })
} 
const buyStore = function(){
    let input = $("#store-input").val()
    $.get(`buy/${input}/?admin=true`, function (storeData) {
        $("body").append(`<div>${storeData} `)
    })
}
var apiUrl = "https://yourdeeblingoapiurl.tld"

$(function(){
    $(".square").on('click', function(){
        $(this).children(".deebly").toggleClass("active");
        console.log("Square Clicked");
    });
});

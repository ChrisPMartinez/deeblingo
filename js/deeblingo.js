var apiUrl = "https://5bcxmqtakg.execute-api.us-west-2.amazonaws.com/Prod/api/";
//var apiUrl = "https://localhost:44315/api/"

$(function(){
    $(".square").on('click', function(){
        $(this).children(".deebly").toggleClass("active");
        console.log("Square Clicked");
    });
});

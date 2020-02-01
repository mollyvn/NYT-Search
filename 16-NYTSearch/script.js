// $(document).ready(function() {

var APIkey= "bgZcdAIPxQJ6K4Bi1YuyVwHwXtktmmqy";
var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=" + APIkey;


    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {
        console.log(response);
    });

// )};
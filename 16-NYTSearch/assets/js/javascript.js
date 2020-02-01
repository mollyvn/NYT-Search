// $(document).ready(function() {

var APIkey= "bgZcdAIPxQJ6K4Bi1YuyVwHwXtktmmqy";
var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=" + APIkey;

var enteredSearchTerm = $("#search");
var startYear =$("#start-year");
var endYear =$("#end-year");
var submitBtn =$("#submit");

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {
        console.log(response);

        console.log(response.copyright);
        for(var i=0; i<response.docs.length; i++){
            console.log(response.docs[i].keywords);
            console.log(response.docs[i].pub_date);
        }
    });

    

    

// )};
// $(document).ready(function() {

var APIkey= "bgZcdAIPxQJ6K4Bi1YuyVwHwXtktmmqy";
var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=" + APIkey;

var enteredSearchTerm = $("#search");
var startYear =$("#start-year");
var endYear =$("#end-year");
var submitBtn =$("#submit");


// $(submitBtn).on("click", function() {
//     enteredSearchTerm = $(this).attr("data-search");
//     var queryURL = "https://api.nytimes.com/svc/"
//      + enteredSearchTerm + "/v2/articlesearch.json?q=election&api-key=" + APIkey;

// //     $.ajax({
// //       url: queryURL,
// //       method: "GET"
// //     })
// //       .then(function(response) {
// //         console.log(response);


// //         for (var i = 0; i < response.docs[i].length; i++) {
// //             var search = response.docs[i].keywords;
// //             console.log(search);
// //         };
      
//   });
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {

        

        console.log(response);
        console.log(response.copyright);
        for(var i=0; i<response.docs[i].length; i++){
            console.log(response.docs[1].keywords);
            console.log(response.docs[1].pub_date);
        }
    });

    

    

// });
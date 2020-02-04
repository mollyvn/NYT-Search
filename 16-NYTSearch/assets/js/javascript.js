$(document).ready(function() {
//=============================================================================
//Set up variables
//=============================================================================

var APIkey= "pC98O4z7UpDQ5zLDKgb82J6PTueCsucX";
//Search Parameters
var query;
var numResults =0;
//$("#search");
var startYear = 0;
// $("#start-year");
var endYear = 0;
// $("#end-year");
var submitBtn =$("#submit");

// URL base
var queryURLbase="https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" +APIkey;

//Track num of art
var articleCounter =0;


//======================================
//Functions
//=============================================================================

function runQuery(numArticles, queryURL){
    //AJAX Function
    $.ajax({url: queryURL,
            method: "GET"
            //object will be stored in NYTData
        }).then(function(NYTData){  
            console.log(queryURL);
            console.log(NYTData);
            console.log(numArticles);

            //clear well
            $("#wellSection").empty();

            for (var i=0; i<numArticles; i++){

                //put into HTML
                var wellSection=$('<div>');
                wellSection.addClass("well");
                wellSection.attr('id', 'articleWell-'+i);
                $('#wellSection').append(wellSection);

                if(NYTData.response.docs[i].headline!= "null"){
                    console.log(NYTData.response.docs[i].headline.main);
                    $("#articleWell-"+i).append("<h3>"+NYTData.response.docs[i].headline.main+"</h3>");

                }
                if(NYTData.response.docs[i].byline && NYTData.response.docs[i].byline.hasOwnProperty("original")){
                    console.log(NYTData.response.docs[i].byline.original);
                    $("#articleWell-"+i).append("<h5>"+NYTData.response.docs[i].byline.original+"</h5>");
                }

                //Attach content to approp well
                $("#articleWell-"+i).append("<h5>"+NYTData.response.docs[i].section_name+"</h5>");
                $("#articleWell-"+i).append("<h5>"+NYTData.response.docs[i].pub_date+"</h5>");
                $("#articleWell-"+i).append("<a href=" + NYTData.response.docs[i].web_url+">" + NYTData.response.docs[i].web_url +"</a>");

                console.log(NYTData.response.docs[i].headline.main);
                console.log(NYTData.response.docs[i].section_name);
                console.log(NYTData.response.docs[i].pub_date);
                console.log(NYTData.response.docs[i].web_url);
                console.log(NYTData.response.docs[i].byline.original);
            }

           
        })
}

//======================================
//Main Process
//=============================================================================

$(submitBtn).on("click", function() {
    console.log("Btn works");
    var searchTerm =$("#search").val().trim();

    //add in search term
    var newURL=queryURLbase +"&q="+ searchTerm;

    //get number of records
    numResults=$("#numRecords").val();

    //get the start Year and endyear
    startYear= $("#start-year").val().trim();
    endYear =$("#end-year").val().trim();

    if (parseInt(startYear)) {
        //add the date infor to the URL
        startYear=startYear+  +"0101";
        
        //add date info to url
        newURL=newURL+"&begin_date=" +startYear;
    }

    if(parseInt(endYear)){
        endYear=endYear+"1231";
        //add date info to url
        newURL=newURL +"&end_sate=" +endYear;
    }
    
    //add the date info to UEL
    // newURL = newURL + "&begin_date=" +startYear +"&end_date=" +endYear;
    console.log(newURL);
    
    //send ajax call the new URL
    runQuery(numResults,newURL);
    return false;

});


});
// javascript, jQuery
// var xhr = $.get("http://api.giphy.com/v1/gifs/search?q=rick+and+morty&api_key=4CdzSPWGdeQOcRZXPwClbWbLKOe7QPmn&limit=5");
// xhr.done(function(data) { console.log("success got data", data); });

$(function() {
var prevSearch = ["Rick and Morty", "Advice Animals", "cat", "dog", "poop"];

function renderButtons() {
    $("#buttons-view").empty();

    for (var i=0; i < prevSearch.length; i++) {
        var a=$("<button>");
            // adding query class to our button
        a.addClass("query")
        a.attr("data-name", prevSearch[i]);
        a.text(prevSearch[i]);

        $("#buttons-view").append(a);
    }
    
};

$("#find").on("click", function(event) {
  event.preventDefault();
  var query = $("#goSearch").val().trim();

  if (query.length >= 1) {
  prevSearch.push(query);
  console.log(prevSearch);
};

  renderButtons();
});

renderButtons();

$(document).on("click", ".query", showQueryInfo);

function showQueryInfo() {
    var query = $(this).attr("data-name");
    var APIKey = "4CdzSPWGdeQOcRZXPwClbWbLKOe7QPmn";
    var giphyURL =  "http://api.giphy.com/v1/gifs/search?q=" + query + "&apikey=" + APIKey + "&limit=10";
    var giphyURLhtps =  "https://api.giphy.com/v1/gifs/search?q=" + query + "&apikey=" + APIKey + "&limit=10";

    $.ajax({
        url: giphyURLhtps,
        method: "GET"
    }).then(function(response) {
        console.log(response);
        var results = response.data;

        for (var i=0; i < results.length; i++){
            var resultsDiv = $("<div>");
            var rating = results[i].rating;
            var p = $("<p>").text("Rated: " + rating);
            var queryImg = $("<img>");
            
            queryImg.attr("src", results[i].images.fixed_height_still.url);
            queryImg.attr("data-still", results[i].images.fixed_height_still.url);
            queryImg.attr("data-animate", results[i].images.fixed_height.url);
            queryImg.addClass("gif");

            resultsDiv.append(queryImg);
            resultsDiv.append(p);

            $("#result").prepend(resultsDiv);
        }
    });

    $.ajax({
        url: giphyURL,
        method: "GET"
    }).then(function(response) {
        console.log(response);
        var results = response.data;

        for (var i=0; i < results.length; i++){
            var resultsDiv = $("<div>");
            var rating = results[i].rating;
            var p = $("<p>").text("Rated: " + rating);
            var queryImg = $("<img>");
            
            queryImg.attr("src", results[i].images.fixed_height_still.url);
            queryImg.attr("data-still", results[i].images.fixed_height_still.url);
            queryImg.attr("data-animate", results[i].images.fixed_height.url);
            queryImg.addClass("gif");

            resultsDiv.append(queryImg);
            resultsDiv.append(p);

            $("#result").prepend(resultsDiv);
        }
    });
};

$(document).on("click", ".gif", function() {
    if($(this).attr("data-animate") === $(this).attr("src")) {
        $(this).attr("src", $(this).attr("data-still"));
    } else {
        $(this).attr("src", $(this).attr("data-animate"));
    }
});

});
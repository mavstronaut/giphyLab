var APIKey = "4CdzSPWGdeQOcRZXPwClbWbLKOe7QPmn";

var prevSearch = ["Rick & Morty", "Advice Animals"];
//javascript, jQuery
// var xhr = $.get("http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=4CdzSPWGdeQOcRZXPwClbWbLKOe7QPmn&limit=5");
// xhr.done(function(data) { console.log("success got data", data); });

function renderButtons() {
    $("#buttons-view").empty();

    for (var i=0; i < prevSearch.length; i++) {
        var a=$("<button>");
            // adding query class to our button
        a.addClass("prev-search")
        a.attr("data-name", prevSearch[i]);
        a.text(prevSearch[i]);

        $("#buttons-view").append(a);
    }
};

$("#find").on("click", function(event) {
  event.preventDefault();
  var query = $("#goSearch").val().trim();

  prevSearch.push(query);
  console.log(prevSearch);

  renderButtons();
  $("#goSearch").val("");
});

renderButtons();



// on click function to bring up results
// $('#find').click(function () {
//     var entry = $("#goSearch").val();
//     event.preventDefault();
//     getSearch(entry);
//     });

//     $(document).click(function () {
    // activate or play the gif when clicked
// });

    // function getWeather(city, country) {
    // var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "," + country + "&appid=" + APIKey;

    // Method 1 https://stackoverflow.com/questions/42193187/how-do-i-display-all-giphy-api-search-result-images/46804284
    function getSearch(entry) {
        $.ajax({
        url: xhr,
        method: "GET",
        }).then(function (response) {

            for (var i = 0; i < response.data.length; i++) {
            var giphyURL = response.data[i].images.fixed_height.url;
            var newImg = $("<img>");
            newImg.attr("src", giphyURL);
            $("<#result>").append(newImg);
        }
        });
    };

    // Method 2 (following along with class o_0)
    // $.ajax({
    // url: xhr,
    // method: "GET",
    // }).then(function (response) {
    //     $('#query').empty();
    //     // Create CODE HERE to Log the queryURL
    //     console.log(queryURL);
    //     // Create CODE HERE to log the resulting object
    //     console.log(response);
    //     // Create CODE HERE to transfer content to HTML
    //     $("<result>").html(response.embed_url);
    // });



// -----------------------------------------------------

//trending

// filter

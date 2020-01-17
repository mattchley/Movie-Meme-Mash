$(document).ready(function () {
    var searchField = $("#movie-search");
    var giphyField = $("#giphy-search");
    var postBtn = $("#post");

    var titleOmdb = $("span#movie-title");
    var directorOmdb = $("#movie-director");
    var plotOmdb = $("#movie-plot");
    var ratingOmdb = $("#movie-rating");
    var imdbIdOmdb = $("#movie-imdbID");
    var posterOmdb = $("#movie-poster");
    var giphyImg = $("#giphy-image");

    searchField.submit(function (event) {

        event.preventDefault();

        var movie = $("#movie-input").val();

        var queryURL = "https://www.omdbapi.com/?t=" + movie + "&apikey=trilogy";

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            $("#movie-title").text(JSON.stringify(response.Title))
            $("#movie-director").text(JSON.stringify(response.Director))
            $("#movie-plot").text(JSON.stringify(response.Plot))

            $("#movie-rating").text(JSON.stringify(response.imdbRating))
            $("#movie-imdbID").text(JSON.stringify(response.imdbID));

            const posterOMDB = response.Poster;

            // Creating and storing an image tag
            var renderedPoster = $("<img>");

            // Setting the renderedPoster src attribute to imageUrl
            renderedPoster.attr("src", posterOMDB);
            renderedPoster.attr("alt", "main image");

            // Prepending the renderedPoster to the images div
            $("#movie-poster").prepend(renderedPoster);

        });
    });

    giphyField.submit(function (event) {
        console.log("pressed giphy")
        event.preventDefault();

        var giphyMood = $("#giphy-input").val();

        var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=Fq39ve6Gue8V8ocJWGP19i1RErf4KQV6&q=" + giphyMood + "&limit=1&offset=0&rating=G&lang=en";

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            const giphyURL = response.data[0].images.original.url

            // Creating and storing an image tag
            var renderedGiphy = $("<img>");

            // Setting the renderedGiphy src attribute to imageUrl
            renderedGiphy.attr("src", giphyURL);
            renderedGiphy.attr("alt", "main image");

            // Prepending the renderedGiphy to the images div
            $("#giphy-image").prepend(renderedGiphy);

        });
    });

    postBtn.on("click", function (event) {
        event.preventDefault();
        var newReview = {
            giphy: giphyImg.attr("src")
        };
        console.log(newReview)
        var newMovie = {
            title: titleOmdb.text(),
            director: directorOmdb.text(),
            plot: plotOmdb.text(),
            poster: posterOmdb.attr("src"),
            rating: ratingOmdb.text(),
            imdbID: imdbIdOmdb.text()
        }
        console.log(newMovie)
        $.post("/api/reviews", newReview);
        $.post("/api/movies", newMovie)
    });
});
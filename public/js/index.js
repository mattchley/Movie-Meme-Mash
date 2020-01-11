$(document).ready(function () {
    var search = $("#movie-search");

    search.submit(function (event) {
        // event.preventDefault() can be used to prevent an event's default behavior.
        // Here, it prevents the submit button from trying to submit a form when clicked
        event.preventDefault();

        // Here we grab the text from the input box
        var movie = $("#movie-input").val();

        // Here we construct our URL
        var queryURL = "https://www.omdbapi.com/?t=" + movie + "&apikey=trilogy";

        // Write code between the dashes below to hit the queryURL with $ajax, then take the response data
        // and display it in the div with an id of movie-view

        // ------YOUR CODE GOES IN THESE DASHES. DO NOT MANUALLY EDIT THE HTML ABOVE.
        console.log(movie);
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            $("#movie-title").text(JSON.stringify(response.Title))
            $("#movie-director").text(JSON.stringify(response.Director))
            $("#movie-plot").text(JSON.stringify(response.Plot))
            
            $("#movie-rating").text(JSON.stringify(response.imdbRating))
            $("#movie-imdbID").text(JSON.stringify(response.imdbID));

            const mainIMG = response.Poster;

            // Creating and storing an image tag
            var fullImage = $("<img>");

            // Setting the fullImage src attribute to imageUrl
            fullImage.attr("src", mainIMG);
            fullImage.attr("alt", "main image");

            // Prepending the fullImage to the images div
            $("#movie-poster").prepend(fullImage);

        });
    });
});
$(document).ready(function () {

  var oldTarget = $("<div>").attr("stlye", "border: none;")
  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page
  $.get("/api/user_data").then(function (data) {
    $(".member-name").text(data.email);
  });

  var formGiphy = $("<form>").attr("id", "giphy-search");
  $("#giphy-search").submit(function (event) {
    event.preventDefault();
    giphySubmit(event)
  });

  function giphySubmit(event) {

    // event.preventDefault() can be used to prevent an event's default behavior.
    // Here, it prevents the submit button from trying to submit a form when clicked

    console.log(60)
    // Here we grab the text from the input box
    var giphyMood = $("#giphy-input").val();
    // Here we construct our URL
    var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=Fq39ve6Gue8V8ocJWGP19i1RErf4KQV6&q=" + giphyMood + "&limit=9&offset=0&rating=G&lang=en";
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function (response) {
      console.log(response)
      var mainIMG = response.data[0].images.original.url
      // Creating and storing an image tag
      var fullImage = $("<img>");
      // Setting the fullImage src attribute to imageUrl
      fullImage.attr("src", mainIMG);
      fullImage.attr("alt", "main image");
      // Prepending the fullImage to the images div
      //   $("#giphy-image").prepend(fullImage);
      updateGiphyCard(response);
    });
  }
  $("#movie-search").submit(function (event) {
    // if (event.which == 13) {
    event.preventDefault();
    var movieEl = $("#movie-input");
    var movie = movieEl.val();
    // console.log(movie)
    $("#movieCard").remove();
    var queryURL = "https://www.omdbapi.com/?t=" + movie + "&apikey=trilogy";
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function (response) {
      console.log(response);
      createMovieCard(response);

    });
    // }
  });

  function createMovieCard(result) {

    var title = result.Title;
    if (title !== null) {
      $("#giphy-col").attr("style", "visibility: visible")
    }
    var release = result.Released;
    var rated = result.Rated;
    var runtime = result.Runtime;
    var poster = result.Poster;
    var internetMovieDatabase = result.Ratings[0].value;
    //   var rottenTomatoes = result.Ratings[1].value;
    //   var metaCritic = result.Ratings[2].value;
    var director = result.Director;
    var plot = result.Plot;
    var imdbID = result.imdbID;
    var rating = result.imdbRating;
    console.log(title)
    console.log(result)
    // console.log("hello")
    //creates the structure for the movie card
    var row = $("<div>").attr("id", "movieCard")
    row.addClass("row")
    var col = $("<div>")
    col.addClass("col s12 m7")
    var card = $("<div>")
    card.addClass("card white")
    var cardContent = $("<div>").attr("style", "overflow:auto")
    cardContent.addClass("card-content white-tex")

    var movieImage = $("<div>").attr("style", "float:left")
    var image = $("<img>").attr("src", poster);
    image.addClass("movie-poster")
    movieImage.append(image);
    var titleElement = $("<h1>").text(title);
    titleElement.addClass("card-title");
    var directorElement = $("<p>").text("Director: " + director);
    directorElement.addClass("card-director");
    var lineBreak = $("<br>");
    var plotElement = $("<p>").text("Plot: " + plot);
    plotElement.addClass("card-plot");
    var lineBreakTwo = $("<br>");
    var ratingElement = $("<p>").text("IMDB Rating: " + rating);
    ratingElement.addClass("card-rating");
    var imdbIDElement = $("<p>").text("IMDB is " + imdbID);
    imdbIDElement.addClass("card-id");


    cardContent.append(movieImage, titleElement, directorElement, lineBreak, plotElement, lineBreakTwo, ratingElement, imdbIDElement);
    card.append(cardContent);
    col.append(card);
    //row.append(col);
    var colGiphy = $("<div>")
    colGiphy.addClass("col s12 m5")
    var cardGiphy = $("<div>")
    cardGiphy.addClass("card white")
    var cardContentGiphy = $("<div>").attr("style", "overflow:auto")
    cardContentGiphy.addClass("card-content black-tex")
    // var formGiphy = $("<form>").attr("id", "giphy-search");
    var inputGiphy = $("<input>").attr("id", "giphy-input")
    inputGiphy.attr("placeholder", "Search");
    var giphyImage = $("<div>").attr("id", "giphy-image");
    giphyImage.attr("style", "float:center");
    formGiphy.append(inputGiphy, giphyImage);
    cardContentGiphy.append(inputGiphy);
    cardGiphy.append(cardContentGiphy);
    colGiphy.append(cardGiphy);

    $("#movieResults").prepend(col);
    // $("#movieResults").append(colGiphy);
    // console.log(163)
    // formGiphy.submit(function (event) {
    //     console.log("165")
    //     giphySubmit(event)
    // });

    //creates structure for the giphy search??? Comments??
  }

  var elems = document.querySelectorAll('.modal');
  var instances = M.Modal.init(elems);

  $("#gify-cards").on('click', function (event) {
    var target = $(event.target);
    oldTarget.attr("style", "border-style:none")
    console.log(target)
    target.attr("style", "border-style:solid")
    oldTarget = target
    //   console.log(here)
  })

  $("#post").click(function (event) {
    event.preventDefault();
    console.log("clicked it ... ");

    // post variables
    var titleOmdb = $(".card-title");
    var directorOmdb = $(".card-director");
    var plotOmdb = $(".card-plot");
    var ratingOmdb = $(".card-rating");
    var imdbIdOmdb = $(".card-id");
    var posterOmdb = $(".movie-poster");
    // var giphyImg = $(".giphy-result");
    var giphyImg = oldTarget[0].src;
    console.log("the giphy src " + giphyImg)
    var user = $(".member-name");

    var newReview = {
      // giphy: giphyImg.attr("src"),
      giphy: giphyImg,
      // movieId: imdbIdOmdb.text()
    };
    console.log(newReview);
    var newMovie = {
      title: titleOmdb.text(),
      director: directorOmdb.text(),
      plot: plotOmdb.text(),
      poster: posterOmdb.attr("src"),
      rating: ratingOmdb.text(),
      imdbID: imdbIdOmdb.text()
    };
    console.log(newMovie);
    $.post("/api/reviews", newReview);
    $.post("/api/movies", newMovie);
  });

  function updateGiphyCard(response) {
    var img1 = response.data[0].images.original.url;
    var img2 = response.data[1].images.original.url;
    var img3 = response.data[2].images.original.url;
    var img4 = response.data[3].images.original.url;
    var img5 = response.data[4].images.original.url;
    var img6 = response.data[5].images.original.url;
    var img7 = response.data[6].images.original.url;
    var img8 = response.data[7].images.original.url;
    var img9 = response.data[8].images.original.url;

    $("#gif1").attr("src", img1);
    $("#gif2").attr("src", img2);
    $("#gif3").attr("src", img3);
    $("#gif4").attr("src", img4);
    $("#gif5").attr("src", img5);
    $("#gif6").attr("src", img6);
    $("#gif7").attr("src", img7);
    $("#gif8").attr("src", img8);
    $("#gif9").attr("src", img9);
  }

});
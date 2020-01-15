$(document).ready(function() {
  // Getting references to our form and input
  var createReviewForm = $("form.create");
  var poster = $("input#movie-poster");
  var imdbID = $("input#movie-imdbID");




    // If we have an email and password, run the signUpUser function
    createReview(poster, imdbID);

//   });

  // Does a post to the signup route. If successful, we are redirected to the members page
  // Otherwise we log any errors
  function createreview(poster, imdbID) {
    $.post("/api/createreview", {
      poster: mposter,
      imdbID: mimdbID
    })
    //   .then(function(data) {
    //     window.location.replace("/members");
    //     // If there's an error, handle it by throwing up a bootstrap alert
    //   })
      .catch(handleLoginErr);
  }

  function handleLoginErr(err) {
    $("#alert.msg").text(err.responseJSON);
    $("#alert").fadeIn(500);
  }
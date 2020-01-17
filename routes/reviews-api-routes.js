// Requiring our models and passport as we've configured it
var db = require("../models");


module.exports = function (app) {
    app.post("/api/reviews", function (req, res) {
        console.log("giphy" + req.body);
        db.Review.create({
            giphy: req.body.giphy,
            // movieId: req.body.movieId,
        })
        .then(function (dbReview) {
            res.json(dbReview);
        });
    });

    app.post("/api/movies", function (req, res) {
        console.log("movies" + req.body);
        db.Movie.create({
            title: req.body.title,
            director: req.body.director,
            plot: req.body.plot,
            poster: req.body.poster,
            rating: req.body.rating,
            imdbID: req.body.imdbID
        })
        .then(function (dbMovie) {
            res.json(dbMovie);
        });
    });
};
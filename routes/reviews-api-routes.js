// Requiring our models and passport as we've configured it
var db = require("../models");


module.exports = function (app) {

    app.get("/api/movies/:id", function (req, res) {
        // Here we add an "include" property to our options in our findOne query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Author
    db.Movie.findOne({
        where: {
          imdbID: req.params.id
        }
      }).then(function(dbMovie) {
        //   console.log(dbMovie)
        res.json(dbMovie);
      });
    })


    app.get("/api/users/:id", function (req, res) {
        // Here we add an "include" property to our options in our findOne query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Author
    db.User.findOne({
        where: {
          id: req.params.id
        }
      }).then(function(dbUser) {
        //   console.log(dbUser)
        res.json(dbUser);
      });
    })

    app.get("/api/users/username/:username", function (req, res) {
        // Here we add an "include" property to our options in our findOne query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Author
    db.User.findOne({
        where: {
          username: req.params.username
        }
      }).then(function(dbUser) {
        //   console.log(dbUser)
        res.json(dbUser);
      });
    })

    app.get("/api/reviews/:id", function (req, res) {
        // Here we add an "include" property to our options in our findall query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Author
    db.Review.findAll({
        where: {
          MovieId: req.params.id
        }
      }).then(function(dbReview) {
          console.log(dbReview)
        res.json(dbReview);
      });
    })


    app.post("/api/reviews", function (req, res) {
        console.log("giphy" + req.body);
        db.Review.create({
            giphy: req.body.giphy,
            comment: req.body.comment,
            MovieId: req.body.MovieId,
            UserId: req.body.UserId
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
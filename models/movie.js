module.exports = function (sequelize, DataTypes) {
    var Movie = sequelize.define("Movie", {

        title: {
            type: DataTypes.STRING,
            allowNull: true
        },
        director: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        plot: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        poster: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        rating: {
            type: DataTypes.STRING,
            allowNull: true
        },
        imdbID: {
            type: DataTypes.STRING,
            allowNull: true
        }
    });

    Movie.associate = function (models) {
        Movie.hasMany(models.Review, {
            onDelete: "cascade"
        });
    };

    return Movie;
};

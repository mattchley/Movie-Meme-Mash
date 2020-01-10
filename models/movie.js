module.exports = function (sequelize, DataTypes) {
    var Movie = sequelize.define("Movie", {

        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        director: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        plot: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        poster: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        rating: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        imdbID: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    });

    Movie.associate = function (models) {
        // We're saying that a Movie should belong to an Author
        // A Movie can't be created without an Author due to the foreign key constraint
        Movie.belongsTo(models.Review, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    return Movie;
};

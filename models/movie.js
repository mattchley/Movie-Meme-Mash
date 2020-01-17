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

    // Movie.associate = function (models) {
        // We're saying that a Movie should belong to an Author
        // A Movie can't be created without an Author due to the foreign key constraint
    //     Movie.belongsTo(models.Review, {
    //         foreignKey: {
    //             allowNull: true
    //         }
    //     });
    // };

    return Movie;
};

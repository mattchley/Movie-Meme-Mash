module.exports = function (sequelize, DataTypes) {
    var Movie = sequelize.define("Movie", {
        imbd_id: {
           type: DataTypes.STRING,
           allowNull: false,
        }
    });

    Movie.associate = function (models) {
        // We're saying that a Movie should belong to an Author
        // A Movie can't be created without an Author due to the foreign key constraint
        Movie.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    return Movie;
};

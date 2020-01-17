module.exports = function (sequelize, DataTypes) {
  var Review = sequelize.define("Review", {
    giphy: {
      type: DataTypes.STRING
    },
    // movieId: {
    //   type: DataTypes.STRING,
    //         allowNull: true
    // }

  });

  Review.associate = function (models) {
    Review.belongsTo(models.Movie, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Review;
};

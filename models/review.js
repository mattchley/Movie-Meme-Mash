module.exports = function (sequelize, DataTypes) {
  var Review = sequelize.define("Review", {
    giphy: {
      type: DataTypes.STRING
    },
    comment: {
      type: DataTypes.TEXT,
      allowNull: false
    }
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
    Review.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Review;
};

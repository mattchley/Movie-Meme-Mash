module.exports = function (sequelize, DataTypes) {
  var Review = sequelize.define("Review", {
    giphy: {
      type: DataTypes.STRING
    }

  });

  // Review.associate = function (models) {
  //   // We're saying that a Review should belong to an Author
  //   // A Review can't be created without an Author due to the foreign key constraint
  //   Review.belongsTo(models.User, {
  //     foreignKey: {
  //       allowNull: false
  //     }
  //   });
  // };

  return Review;
};

// will need a foreign key by email
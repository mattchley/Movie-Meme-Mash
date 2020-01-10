module.exports = function (sequelize, DataTypes) {
  var Review = sequelize.define("Review", {
    movie_id: {
      type: Datatypes.INTEGER,
      allowNull: false
    },
    user_id: {
      type: Datatypes.INTEGER,
      allowNull: false
    },
    giphy: {
      type: Datatypes.STRING,
      allowNull: false
    },
    review: {
      type: Datatypes.TEXT,
      allowNull: false
    },
    plus: {
      type: Datatypes.INTEGER,
      defaultValue: 0
    },
    minus: {
      type: Datatypes.INTEGER,
      defaultValue: 0
    },
    rating: {
      type: Datatypes.INTEGER,
      allowNull: false
    },

  });

  Review.associate = function (models) {
    // We're saying that a Review should belong to an Author
    // A Review can't be created without an Author due to the foreign key constraint
    Review.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Review;
};

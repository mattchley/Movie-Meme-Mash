module.exports = function (sequelize, DataTypes) {
  var Review = sequelize.define("Review", {
    movie_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    giphy: {
      type: DataTypes.STRING,
      allowNull: false
    },
    review: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    plus: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    minus: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    rating: {
      type: DataTypes.INTEGER,
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

// will need a foreign key by email
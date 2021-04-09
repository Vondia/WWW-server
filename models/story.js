"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class story extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      story.hasOne(models.answer);
    }
  }
  story.init(
    {
      name: { type: DataTypes.STRING, allowNull: false },
      storySentence: DataTypes.TEXT,
      preziUrl: { type: DataTypes.STRING, allowNull: false },
      imageUrl: { type: DataTypes.STRING, allowNull: false },
      question: { type: DataTypes.STRING, allowNull: false },
    },
    {
      sequelize,
      modelName: "story",
    }
  );
  return story;
};

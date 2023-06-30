'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Like extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.User, { foreignKey: 'user_id' });
    }
    static associate(models) {
      this.belongsTo(models.Pet, { foreignKey: 'pet_id' });
    }
  }
  Like.init(
    {
      user_id: DataTypes.INTEGER,
      user2_id: DataTypes.INTEGER,
      pet_id: DataTypes.INTEGER,
      pet2_id: DataTypes.INTEGER,
      isLiked: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: 'Like',
    },
  );
  return Like;
};

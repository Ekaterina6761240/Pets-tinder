const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Like extends Model {
    static associate(models) {
      // this.belongsTo(models.User, { foreignKey: 'user_id' });
      this.belongsTo(models.Pet, { foreignKey: 'who_liked_pet_id' });
      this.belongsTo(models.Pet, { foreignKey: 'was_liked_pet_id' });
    }
  }
  Like.init(
    {
      who_liked_pet_id: DataTypes.INTEGER,
      was_liked_pet_id: DataTypes.INTEGER,
      isLiked: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: 'Like',
    },
  );
  return Like;
};

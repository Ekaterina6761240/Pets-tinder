const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Like extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // this.belongsTo(models.User, { foreignKey: 'user_id' });
      this.belongsTo(models.Pet, { foreignKey: 'who_liked_pet_id', as: 'Liker' });
      this.belongsTo(models.Pet, { foreignKey: 'was_liked_pet_id', as: 'Liked' });
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

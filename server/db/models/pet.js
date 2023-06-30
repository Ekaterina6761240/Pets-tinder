const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Pet extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.User, { foreignKey: 'user_id' });

      this.hasMany(models.Like, { foreignKey: 'pet_id' });

      this.hasMany(models.Message, { foreignKey: 'pet_id' });
    }
  }
  Pet.init(
    {
      name: DataTypes.STRING,
      type: DataTypes.STRING,
      breed: DataTypes.STRING,
      age: DataTypes.INTEGER,
      image: DataTypes.STRING,
      user_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Pet',
    },
  );
  return Pet;
};

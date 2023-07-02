const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Pet extends Model {
    static associate(models) {
      this.belongsTo(models.User, { foreignKey: 'user_id' });
      this.hasMany(models.Like, { foreignKey: 'who_liked_pet_id' });
      this.hasMany(models.Like, { foreignKey: 'was_liked_pet_id' });

      // this.hasMany(models.Like, { foreignKey: 'pet_id' });

      this.hasMany(models.Message, { foreignKey: 'pet_id' });
    }
  }
  Pet.init(
    {
      name: DataTypes.STRING,
      type: DataTypes.STRING,
      sex: DataTypes.STRING,
      age: DataTypes.INTEGER,
      city: DataTypes.STRING,
      pedigree: DataTypes.STRING,
      info: DataTypes.STRING,
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

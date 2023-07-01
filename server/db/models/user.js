const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.Pet, { foreignKey: 'user_id' });

      // this.hasMany(models.Like, { foreignKey: 'user_id' });

      // this.hasMany(models.Match, { foreignKey: 'user_id' });
    }
  }
  User.init(
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      premium: DataTypes.BOOLEAN,
      rating: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'User',
    },
  );
  return User;
};

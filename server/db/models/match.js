'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Match extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.User, { foreignKey: 'user_id' });
    }
    static associate(models) {
      this.hasMany(models.Message, { foreignKey: 'match_id' });
    }
  }
  Match.init(
    {
      user1_id: DataTypes.INTEGER,
      user2_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Match',
    },
  );
  return Match;
};

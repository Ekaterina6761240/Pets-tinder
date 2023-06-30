'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Message extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */

    static associate(models) {
      this.belongsTo(models.Pet, { foreignKey: 'pet_id' });
    }
  }
  Message.init(
    {
      match_id: DataTypes.INTEGER,
      user1_id: DataTypes.INTEGER,
      user2_id: DataTypes.INTEGER,
      text: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Message',
    },
  );
  return Message;
};

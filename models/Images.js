const Sequelize = require('sequelize')
const Model = Sequelize.Model;

module.exports = (sequelize, DataTypes) => {
  class Images extends Model {}
  Images.init({
    // attributes
    image_string: {
        type: DataTypes.TEXT,
        allowNull: false
    }
  }, {
      sequelize,
      modelName: 'Images'
      // options
  });
  Images.sync();
  return Images;
};
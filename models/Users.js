const Sequelize = require('sequelize')
const Model = Sequelize.Model;

module.exports = (sequelize, DataTypes) => {
  class Users extends Model {}
  Users.init({
    // attributes
    first_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    last_name: {
        type: DataTypes.STRING,
        allowNull: false
        // allowNull defaults to true
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    extra_column: {
        type: DataTypes.STRING,
        allowNull: true
    }
  }, {
      sequelize,
      modelName: 'Users'
      // options
  });
  Users.sync();
  return Users;
};
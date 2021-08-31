const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("users", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    age: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    userName: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.DECIMAL,
    },
  });
};

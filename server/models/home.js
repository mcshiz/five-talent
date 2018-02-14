'use strict';
module.exports = (sequelize, DataTypes) => {
  var Home = sequelize.define('Home', {
    mls: {
      type: DataTypes.INTEGER,
      unique: true,
      allowNull: false
	},
    street1: DataTypes.STRING,
    street2: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    zip: DataTypes.STRING,
    neighborhood: DataTypes.STRING,
    salesPrice: DataTypes.FLOAT,
    dateListed: {
      type: DataTypes.DATE,
      defaultValue: new Date()
    },
    bedrooms: DataTypes.INTEGER,
    bathrooms: DataTypes.FLOAT,
    garageSize: DataTypes.FLOAT,
    squareFeet: DataTypes.FLOAT,
    lotSize: DataTypes.FLOAT,
    description: DataTypes.TEXT
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Home;
};
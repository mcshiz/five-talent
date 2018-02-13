'use strict';
module.exports = (sequelize, DataTypes) => {
  var Home = sequelize.define('Home', {
    mls: DataTypes.UUID,
    street1: DataTypes.STRING,
    street2: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    zip: DataTypes.STRING,
    neighborhood: DataTypes.STRING,
    salesPrice: DataTypes.FLOAT,
    dateListed: DataTypes.DATE,
    bedrooms: DataTypes.INTEGER,
    bathrooms: DataTypes.FLOAT,
    garageSize: DataTypes.STRING,
    squareFeet: DataTypes.FLOAT,
    lotSize: DataTypes.STRING,
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
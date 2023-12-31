const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Vendor extends Model {}

Vendor.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    vendor_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // What other fields do we need specific to Vendor, if any? Do we want vendor details like address etc?
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id',
      },
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'vendor',
  }
);

module.exports = Vendor;

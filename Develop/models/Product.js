// import important parts of sequelize library
const { Model, DataTypes } = require("sequelize");
// import our database connection from config.js
const sequelize = require("../config/connection");
const Category = require("./Category");

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// set up fields and rules for Product model
Product.init({
  id: {
    type: DataTypes.INTERGER,
    allowNull: false,
    primaryKey: true,
    autoIncriment: true,
  },
  product_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
    validate: {
      isDecimal: true,
    },
  },
  stock: {
    type: DataTypes.INTERGER,
    allowNull: false,
    defaultValue: 10,
    validate: {
      isNumeric: true,
    },
  },
  category_id: {
    type: DataTypes.INTERGER,
    references: {
      model: "category",
      key: "id",
    },
  },
});

module.exports = Product;

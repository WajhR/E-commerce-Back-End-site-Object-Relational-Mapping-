const {Model, DataTypes} = require('sequelize');
const db = require('../config/connection');

class Products extends Model{}

Products.init({
    title: {
        type: DataTypes.STRING,
        unique:true
    },
    author: {
        type: DataTypes.STRING,
        allowNull:false
    },
    in_stock: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    }
},{
    sequelize: db,
    modelName: 'Products',
    timestamp: false
});

module.exports = Products;
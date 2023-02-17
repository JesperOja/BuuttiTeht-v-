import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../util/db.js';

class Book extends Model {}

Book.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    author: {
        type: DataTypes.STRING,
        allowNull: false
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING
    }
}, {
    sequelize,
    underscored: true,
    modelName: 'blog'
})

export default Book; 

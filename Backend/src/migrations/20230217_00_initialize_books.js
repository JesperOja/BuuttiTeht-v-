const { DataTypes } = require('sequelize')

module.exports = {
  up: async ({context: queryInterface}) => {
    await queryInterface.createTable('books', {
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
        description:{
          type: DataTypes.STRING
        }
      })

},
down: async ({context: queryInterface}) => {
  await queryInterface.dropTable('books')
}
}
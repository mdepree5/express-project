'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Users', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    userName: {
      allowNull: false,
      type: Sequelize.STRING(50),
      unique: true
    },
    firstName: {
      type: Sequelize.STRING(50)
    },
    lastName: {
      type: Sequelize.STRING(50)
    },
    email: {
      allowNull: false,
      type: Sequelize.STRING(255),
      unique: true
    },
    hashedPassword: {
      allowNull: false,
      type: Sequelize.STRING
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE
    },
    updatedAt: {
      allowNull: true,
      type: Sequelize.DATE
    }
  }),
  down: (queryInterface, Sequelize) => queryInterface.dropTable('Users')
};

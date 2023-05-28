'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('Users', 'email', {
      type: Sequelize.STRING,
      allowNull: false,
      unique: false,
    });

    await queryInterface.changeColumn('Users', 'lastName', {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('Users', 'email');

    await queryInterface.changeColumn('Users', 'lastName', {
      type: Sequelize.STRING,
      allowNull: false,
      unique: false
    });
  }
  };

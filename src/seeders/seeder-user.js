'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Users', [{
      email: 'admin@gmail.com',
      password: 'haikake',
      firstName: 'lê văn',
      lastName: 'hải',
      address: 'Quảng Bình',
      gender: 1,
      roleID: 'R1', // admin
      phoneNumber: '0915*****664', 
      positionId: 'doctor', 
      image: '', 
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Users', null, {});
  }
};

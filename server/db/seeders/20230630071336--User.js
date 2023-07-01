/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert(
      'Users',
      [
        {
          name: 'John Smith',
          email: 'john@example.com',
          password: 'password123',
          premium: true,
          rating: 5,
        },
        {
          name: 'Jane Doe',
          email: 'jane@example.com',
          password: 'P@ssw0rd',
          premium: false,
          rating: 4,
        },
        {
          name: 'Alex Johnson',
          email: 'alex@example.com',
          password: 'secret321',
          premium: true,
          rating: 3,
        },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Users', null, {});
  },
};

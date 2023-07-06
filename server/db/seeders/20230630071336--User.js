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
          password: '123',
          premium: true,
          rating: 5,
        },
        {
          name: 'Jane Doe',
          email: 'jane@example.com',
          password: '321',
          premium: false,
          rating: 4,
        },
        {
          name: 'Alex Johnson',
          email: 'alex@example.com',
          password: '555',
          premium: true,
          rating: 3,
        },
        {
          name: 'Катя',
          email: '123@mail.ru',
          password: '123',
          premium: true,
          rating: 4,
        },
        {
          name: 'Влад',
          email: '123@gmail.com',
          password: '123',
          premium: true,
          rating: 5,
        },
        {
          name: 'Маша',
          email: '123@yandex.ru',
          password: '123',
          premium: true,
          rating: 6,
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

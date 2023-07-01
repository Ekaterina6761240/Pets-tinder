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
      'Likes',
      [
        {
          who_liked_pet_id: 2,
          was_liked_pet_id: 1,
          isLiked: true,
        },
        {
          who_liked_pet_id: 1,
          was_liked_pet_id: 2,
          isLiked: true,
        },
        {
          who_liked_pet_id: 2,
          was_liked_pet_id: 3,
          isLiked: true,
        },
        {
          who_liked_pet_id: 2,
          was_liked_pet_id: 4,
          isLiked: true,
        },
        {
          who_liked_pet_id: 4,
          was_liked_pet_id: 2,
          isLiked: true,
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
    await queryInterface.bulkDelete('Likes', null, {});
  },
};

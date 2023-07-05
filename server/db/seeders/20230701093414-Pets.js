/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Pets',
      [
        {
          name: 'Бобик',
          type: 'Собака',
          sex: 'Мужской',
          age: 3,
          city: 'Москва',
          pedigree: 'Овчарка',
          info: 'Любит изучать композицию, а также изучать их разные исполнители',
          image: '_normal.jpg',
          user_id: 2,
        },
        {
          name: 'Шарик',
          type: 'Собака',
          sex: 'Мужской',
          age: 1,
          city: 'Санкт-Петербург',
          pedigree: 'Мальтезе',
          info: 'Любит изучать композицию, а также изучать их разные исполнители',
          image: '3313640.png',
          user_id: 2,
        },
        {
          name: 'Рекс',
          type: 'Собака',
          sex: 'Мужской',
          age: 2,
          city: 'Уфа',
          pedigree: 'Йорк',
          info: 'Любит изучать композицию, а также изучать их разные исполнители',
          image:
            'AQAORmSmp-g8fRMB7HvtMKV1gKo7Uple1bGSzrZI_O5p-ZVAWKXQkvzWsOMVoniYvTYLe4H8pp0aT0wiWYUPj4pWKUo.jpg',
          user_id: 3,
        },
        {
          name: 'Лайка',
          type: 'Собака',
          sex: 'Женский',
          age: 4,
          city: 'Улан-Удэ',
          pedigree: 'Дог',
          info: 'Любит изучать композицию, а также изучать их разные исполнители',
          image: 'ec4e7e17592a89e0d32bede742150304.jpeg',
          user_id: 2,
        },
        {
          name: 'Барон',
          type: 'Кошка',
          sex: 'Мужской',
          age: 6,
          city: 'Москва',
          pedigree: 'Крыса ушастая',
          info: 'Любит изучать композицию, а также изучать их разные исполнители',
          image: '5.jpg',
          user_id: 1,
        },
        {
          name: 'Багира',
          type: 'Кошка',
          sex: 'Женский',
          age: 6,
          city: 'Санкт-Петербург',
          pedigree: 'Бенгал',
          info: 'Любит изучать композицию, а также изучать их разные исполнители',
          image: '2551625.jpg',
          user_id: 3,
        },
        {
          name: 'Мурка',
          type: 'Кошка',
          sex: 'Женский',
          age: 1,
          city: 'Владимир',
          pedigree: 'Сфинкс',
          info: 'Любит изучать композицию, а также изучать их разные исполнители',
          image: 'i.webp',
          user_id: 2,
        },
        {
          name: 'Чебурашка',
          type: 'Кошка',
          sex: 'Мужской',
          age: 3,
          city: 'Екатеринбург',
          pedigree: 'Хомяк',
          info: 'Любит изучать композицию, а также изучать их разные исполнители',
          image: 'images (1).jpg',
          user_id: 1,
        },
        {
          name: 'Кузя',
          type: 'Кошка',
          sex: 'Мужской',
          age: 2,
          city: 'Москва',
          pedigree: 'Дворовая',
          info: 'Любит изучать композицию, а также изучать их разные исполнители',
          image: 'images.jpg',
          user_id: 1,
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
    await queryInterface.bulkDelete('Pets', null, {});
  },
};

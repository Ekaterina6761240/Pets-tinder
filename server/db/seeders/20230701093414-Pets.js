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
          pedigree: 'Лабрадор',
          info: 'Любит изучать композицию, а также изучать их разные исполнители',
          image: '5ddeb3e40af939a26ba4b62598fe5112.jpg',
          user_id: 2,
        },
        {
          name: 'Шарик',
          type: 'Собака',
          sex: 'Мужской',
          age: 1,
          city: 'Санкт-Петербург',
          pedigree: 'Овчарка',
          info: 'Любит изучать композицию, а также изучать их разные исполнители',
          image: '11.jpg',
          user_id: 2,
        },
        {
          name: 'Рекс',
          type: 'Собака',
          sex: 'Мужской',
          age: 2,
          city: 'Уфа',
          pedigree: 'Лабрадор',
          info: 'Любит изучать композицию, а также изучать их разные исполнители',
          image: '1568648029_ryzhiy-labrador.jpg',
          user_id: 3,
        },
        {
          name: 'Лайка',
          type: 'Собака',
          sex: 'Женский',
          age: 4,
          city: 'Улан-Удэ',
          pedigree: 'Корги',
          info: 'Любит изучать композицию, а также изучать их разные исполнители',
          image: 'porodistye-sobaki-krasivye-kartinki-19.jpeg',
          user_id: 2,
        },
        {
          name: 'Барон',
          type: 'Кошка',
          sex: 'Мужской',
          age: 6,
          city: 'Москва',
          pedigree: 'Сибирская',
          info: 'Любит изучать композицию, а также изучать их разные исполнители',
          image: '0fc2c545-c13a-451f-81f4-032659b270bf.jpg',
          user_id: 1,
        },
        {
          name: 'Багира',
          type: 'Кошка',
          sex: 'Женский',
          age: 6,
          city: 'Санкт-Петербург',
          pedigree: 'Пушистая',
          info: 'Любит изучать композицию, а также изучать их разные исполнители',
          image: 'c48d31be1c9aad219531240030650bae.jpg',
          user_id: 3,
        },
        {
          name: 'Мурка',
          type: 'Кошка',
          sex: 'Женский',
          age: 1,
          city: 'Владимир',
          pedigree: 'Британская',
          info: 'Любит изучать композицию, а также изучать их разные исполнители',
          image: 'koshka-kot-morda.jpg',
          user_id: 2,
        },
        {
          name: 'Чебурашка',
          type: 'Кошка',
          sex: 'Мужской',
          age: 3,
          city: 'Екатеринбург',
          pedigree: 'Дикая',
          info: 'Любит изучать композицию, а также изучать их разные исполнители',
          image: 'koshka-kot-morda.jpg',
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
          image: '1661756612_2.jpg',
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

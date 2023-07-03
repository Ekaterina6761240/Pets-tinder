/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Pets',
      [
        {
          name: 'Бобик',
          type: 'собака',
          sex: 'мужской',
          age: 3,
          city: 'Москва',
          pedigree: 'Овчарка',
          info: 'Любит изучать композицию, а также изучать их разные исполнители',
          image:
            'https://cdnn21.img.ria.ru/images/15065/90/150659078_76:0:425:349_1920x0_80_0_0_f65e7dcf5e836e0192159eac4f39b6e5.jpg',
          user_id: 2,
        },
        {
          name: 'Шарик',
          type: 'собака',
          sex: 'мужской',
          age: 1,
          city: 'Санкт-Петербург',
          pedigree: 'Мальтезе',
          info: 'Любит изучать композицию, а также изучать их разные исполнители',
          image: 'https://sobaky.info/wp-content/uploads/2017/12/m1-1.jpg',
          user_id: 2,
        },
        {
          name: 'Рекс',
          type: 'собака',
          sex: 'мужской',
          age: 2,
          city: 'Уфа',
          pedigree: 'Йорк',
          info: 'Любит изучать композицию, а также изучать их разные исполнители',
          image:
            'https://rg.ru/uploads/images/214/34/08/photorep_imageid_538385_8085b70e8b6927e1575618884.jpg',
          user_id: 3,
        },
        {
          name: 'Лайка',
          type: 'собака',
          sex: 'женский',
          age: 4,
          city: 'Улан-Удэ',
          pedigree: 'Дог',
          info: 'Любит изучать композицию, а также изучать их разные исполнители',
          image: 'https://lapkins.ru/upload/uf/a02/a029a6bcc025fd33a596d296193d5e28.jpg',
          user_id: 2,
        },
        {
          name: 'Барон',
          type: 'грызун',
          sex: 'мужской',
          age: 6,
          city: 'Москва',
          pedigree: 'Крыса ушастая',
          info: 'Любит изучать композицию, а также изучать их разные исполнители',
          image: 'https://homkin.ru/wp-content/uploads/2018/05/14-2.jpg',
          user_id: 1,
        },
        {
          name: 'Багира',
          type: 'кошка',
          sex: 'женский',
          age: 6,
          city: 'Санкт-Петербург',
          pedigree: 'Бенгал',
          info: 'Любит изучать композицию, а также изучать их разные исполнители',
          image:
            'https://lifehacker.ru/wp-content/uploads/2019/12/Depositphotos_88222332_xl-2015_1577102622-e1577103030530.jpg',
          user_id: 3,
        },
        {
          name: 'Мурка',
          type: 'кошка',
          sex: 'женский',
          age: 1,
          city: 'Владимир',
          pedigree: 'Сфинкс',
          info: 'Любит изучать композицию, а также изучать их разные исполнители',
          image:
            'https://koshka.top/uploads/posts/2021-11/1638106879_1-koshka-top-p-rozovii-sfinks-1.jpg',
          user_id: 1,
        },
        {
          name: 'Чебурашка',
          type: 'грызун',
          sex: 'мужской',
          age: 3,
          city: 'Екатеринбург',
          pedigree: 'Хомяк',
          info: 'Любит изучать композицию, а также изучать их разные исполнители',
          image:
            'https://cdnn21.img.ria.ru/images/150895/53/1508955367_0:77:3672:2143_1920x0_80_0_0_c628a973e47c4929c1e8aff4e25f9ba6.jpg',
          user_id: 2,
        },
        {
          name: 'Кузя',
          type: 'кошка',
          sex: 'мужской',
          age: 2,
          city: 'Москва',
          pedigree: 'Дворовая',
          info: 'Любит изучать композицию, а также изучать их разные исполнители',
          image:
            'https://avatars.dzeninfra.ru/get-zen_doc/4935831/pub_610ad22fc6a5c72a8d63fdb2_610ad8bbd807673411c4c2fa/scale_1200',
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

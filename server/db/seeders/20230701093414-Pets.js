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
          image: 'https://s0.rbk.ru/v6_top_pics/media/img/7/19/756752350085197.webp',
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
          image:
            'https://cdn1.ozonusercontent.com/s3/club-storage/images/article_image_752x940/697/c500/ed7e52e-ab4d-4d1b-80fe-15e99ffbf6b6.jpeg',
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
          image:
            'https://cdnn1.inosmi.ru/img/24985/10/249851004_0:196:2030:1211_1920x0_80_0_0_78318b59d4ce0cde91f76a1b092765e7.jpg',
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
          image:
            'https://avatars.dzeninfra.ru/get-zen_doc/1246934/pub_5b9a5b8c341cd400abd07c2c_5b9a5bb69d8b2a00aa9e1ba1/scale_1200',
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
          image: 'https://s0.rbk.ru/v6_top_pics/media/img/4/97/756723916815974.webp',
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
          image: 'https://s09.stc.yc.kpcdn.net/share/i/12/12496523/wr-960.webp',
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
          image: 'https://zooput.ru/upload/iblock/482/4820791b5f2d5e89fdb1881ca9d10acf.jpg',
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
            'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Savannah_Cat_closeup.jpg/800px-Savannah_Cat_closeup.jpg',
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

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
          city: 'Москва',
          age: 3,
          image: 'https://s0.rbk.ru/v6_top_pics/media/img/7/19/756752350085197.webp',
        },
        {
          name: 'Шарик',
          type: 'собака',
          sex: 'мужской',
          city: 'Санкт-Петербург',

          age: 1,
          image:
            'https://cdn1.ozonusercontent.com/s3/club-storage/images/article_image_752x940/697/c500/ed7e52e-ab4d-4d1b-80fe-15e99ffbf6b6.jpeg',
        },
        {
          name: 'Рекс',
          type: 'собака',
          sex: 'мужской',
          city: 'Уфа',

          age: 2,
          image:
            'https://rg.ru/uploads/images/214/34/08/photorep_imageid_538385_8085b70e8b6927e1575618884.jpg',
        },
        {
          name: 'Лайка',
          type: 'собака',
          sex: 'женский',
          city: 'Улан-Удэ',

          age: 4,
          image:
            'https://cdnn1.inosmi.ru/img/24985/10/249851004_0:196:2030:1211_1920x0_80_0_0_78318b59d4ce0cde91f76a1b092765e7.jpg',
        },
        {
          name: 'Барон',
          type: 'грызун',
          sex: 'мужской',
          city: 'Москва',

          age: 6,
          image:
            'https://avatars.dzeninfra.ru/get-zen_doc/1246934/pub_5b9a5b8c341cd400abd07c2c_5b9a5bb69d8b2a00aa9e1ba1/scale_1200',
        },
        {
          name: 'Багира',
          type: 'кошка',
          sex: 'женский',
          city: 'Санкт-Петербург',

          age: 6,
          image: 'https://s0.rbk.ru/v6_top_pics/media/img/4/97/756723916815974.webp',
        },
        {
          name: 'Мурка',
          type: 'кошка',
          sex: 'женский',
          city: 'Владимир',

          age: 1,
          image: 'https://s09.stc.yc.kpcdn.net/share/i/12/12496523/wr-960.webp',
        },
        {
          name: 'Чебурашка',
          type: 'грызун',
          sex: 'мужской',
          city: 'Екатеринбург',

          age: 3,
          image: 'https://zooput.ru/upload/iblock/482/4820791b5f2d5e89fdb1881ca9d10acf.jpg',
        },
        {
          name: 'Кузя',
          type: 'кошка',
          sex: 'мужской',
          city: 'Москва',

          age: 2,
          image:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Savannah_Cat_closeup.jpg/800px-Savannah_Cat_closeup.jpg',
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

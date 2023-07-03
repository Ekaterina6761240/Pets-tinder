// Node.js

const axios = require('axios');
const FormData = require('form-data');
const fs = require('fs');
const data = new FormData();
data.append('image', fs.createReadStream('/xxxx/images/image-1.jpg'), 'image-1.jpg');
data.append('image', fs.createReadStream('/xxxx/images/image-2.jpg'), 'image-2.jpg');
data.append('image', fs.createReadStream('/xxxx/images/image-3.jpg'), 'image-3.jpg');
data.append('image', fs.createReadStream('/xxxx/images/image-4.jpg'), 'image-4.jpg');
data.append('callbackURL', 'https://...'); // Optional

const config = {
  method: 'post',
  maxBodyLength: Infinity,
  url: 'YOUR_API_BASE_URL/blend',
  headers: {
    Authorization: 'af5cbb5b-2fd0-47be-b7a8-67df1879c708',
    ...data.getHeaders(),
  },
  data: data,
};

axios
  .request(config)
  .then((response) => {
    console.log(JSON.stringify(response.data));
  })
  .catch((error) => {
    console.log(error);
  });

const express = require('express');
const router = require('./routs');
const sequelize = require('./db/connection');

const PORT = 3000;

const app = express();

app.use(express.json());
app.use(router);

sequelize.sync({ force: false })
  .then(() => {
    app.listen(PORT, () => console.log('http://localhost:3000'));
  });






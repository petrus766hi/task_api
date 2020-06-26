import express from 'express';
import Sequelize from 'sequelize';
import bodyParser from 'body-parser';

import user from './src/routes/users.js'
import product from './src/routes/products.js'

const app = express();
const port = 2000;

app.use(bodyParser.json());


  //config database
// const sequelize = new Sequelize('test', 'postgres', '301090', {
//     host: '127.0.0.1',
//     dialect: 'postgres'
// });


user(app);
product(app);




app.listen(port);

console.log('RESTful API server started on: ' + port);

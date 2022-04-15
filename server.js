const express = require('express');
const dotenv = require('dotenv').config();
const database = require('./app/config/database/Mongoose_connection')
const bodyParser = require('body-parser');
const userRouter = require('./app/api/routes/User');
const loginRouter = require('./app/api/routes/Login');
const logoutRouter = require('./app/api/routes/logout')
const cookieParser = require('cookie-parser')

const port = process.env.PORT || 3000;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : true }));

app.use(cookieParser());

app.use('/user', userRouter);
app.use('/', loginRouter);
app.use('/', logoutRouter);

app.listen(port, ()=>{ console.log(`WE ARE CONNECTED TO THE SERVER SUCCESSFULY ON THE PORT : ${port}`) });
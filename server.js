const express = require('express');
const dotenv = require('dotenv').config();
const database = require('./app/config/database/Mongoose_connection')
const bodyParser = require('body-parser');
const userRouter = require('./app/api/routes/user');
const adminRouter = require('./app/api/routes/admin');
const headRouter = require('./app/api/routes/head');
const ownerRouter = require('./app/api/routes/owner');
const cookieParser = require('cookie-parser')

const port = process.env.PORT || 3000;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : true }));

app.use(cookieParser());

app.use('/user', userRouter);
app.use('/admin', adminRouter);
app.use('/head', headRouter);
app.use('/owner', ownerRouter);

app.listen(port, ()=>{ console.log(`WE ARE CONNECTED TO THE SERVER SUCCESSFULY ON THE PORT : ${port}`) });
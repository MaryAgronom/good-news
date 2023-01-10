require('dotenv').config();

const path = require('path');
const express = require('express');
const morgan = require('morgan');

const app = express();

const { PORT, SESSION_SECRET } = process.env;

const { sequelize } = require('../db/models');

app.use(morgan('dev'));

app.use(express.static('public'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// cookies

const session = require('express-session')
const FileStore = require('session-file-store')(session)

const homeRoute = require('./routes/homeRoute');
const regRoute = require('./routes/regRoute');
const logoutRoute = require('./routes/logoutRout');
const loginRoute = require('./routes/loginRouter');
const cabinetRoute = require('./routes/cabinetRoute');

const sessionConfig = {
    name: 'gncookies',
    store: new FileStore(),
    secret: SESSION_SECRET ?? 'Секретное слово',
    resave: false, // * если true, пересохранит сессию, даже если она не менялась
    saveUninitialized: false, // * если false, куки появятся только при установке req.session
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 5, // * время жизни в мс (ms)
      httpOnly: true,
    }
  }

//  Подключи сессии как мидлу
  app.use(session(sessionConfig))

// перекидать на хоум, если пустой слеш
  app.get('/', (req, res) => {
    res.redirect('/home');
  });

  app.use('/home', homeRoute);
  app.use('/reg', regRoute);
  app.use('/logout', logoutRoute);
  app.use('/login', loginRoute);
  app.use('/cabinet', cabinetRoute);
  



  app.listen(PORT, async () => {
    try {
      await sequelize.authenticate();
      console.log('Соединение с базой установлено!');
    } catch (err) {
      console.log(err, 'Error!');
    }
    console.log(`Сервер поднят на ${PORT} порту!`);
  });
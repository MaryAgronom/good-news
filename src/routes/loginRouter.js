const bcrypt = require('bcrypt');

const express = require('express');

const router = express.Router();

const renderTemplate = require('../lib/renderTemplate');

const { User } = require('../../db/models');

const Login = require('../views/Login');



router.post ('/', async (req, res) => {

   const { username, password } = req.body;
   try {
     // ищем юзера по логину
     const user = await User.findOne({ where: { username } });
 
     if (user) {
       //  расхешировать пароли и проверить на совпадение
       // ? compare - вернёт true / false
       const passCheck = await bcrypt.compare(password, user.password);
       //  Проверка
       if (passCheck) {
         // создание+сохранение сессии и редирект
         req.session.userName = user.username;
         req.session.save(() => {
           res.redirect('/');
         });
         
       } else {
         res.redirect('/reg');
       }
     } else {
       res.redirect('/reg');
     }
   } catch (error) {
     res.send(`ERROR---> ${error}`);
   }
 });

 router.get('/', (req, res) => {
     renderTemplate(Login, {}, res);
   });

module.exports = router;

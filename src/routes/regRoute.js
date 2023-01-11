const bcrypt = require('bcrypt'); // хеширование пароля

const express = require('express');

const router = express.Router();



const renderTemplate = require('../lib/renderTemplate');

const Reg = require('../views/Registration');

const { User } = require('../../db/models');
const { regExpLiteral } = require('@babel/types');



router.post('/', async (req, res) => {
   const {email, username, password} = req.body; // берем из вьюшки из инпутов
   try {
   const hashedPassword = await bcrypt.hash(password, 10);
    const myUser = await User.create({email: email, username: username, password: hashedPassword }); // запись юзера в базу 
    
    req.session.userName = myUser.username; // создаем сессию - юзер сессии равен юзеру из базы
    // req.session.id = myUser.id; 
    // console.log('------------------>', req.session.userName)
  
    req.session.save(() => {
      // res.redirect('/home');
    });

    res.json(myUser);
 
   } catch (error) {
     console.log(error);
    
   }
 });

router.get('/', (req, res) => {
  const user = req.session?.userName;
  renderTemplate(Reg, { user }, res);
});

module.exports = router;

const express = require('express');

const router = express.Router();

const renderTemplate = require('../lib/renderTemplate');

const { Bad, Good, User } = require('../../db/models');

const Cabinet = require('../views/Cabinet');


router.get('/', async (req, res) => {
 
  try {
    const user = req.session?.userName; 
    const userid = await User.findOne({ where: { username: user } });
    const goodWords = await Good.findAll({ where: { userid: userid.id } })
    const badWords = await Bad.findAll({ where: { userid: userid.id } })
    
      renderTemplate(Cabinet, { goodWords, badWords, user }, res);
 
  } catch (error) {
      console.log(error);
  }
})



module.exports = router;
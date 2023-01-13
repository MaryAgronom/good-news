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
    const plainGood = goodWords.map((item) => item.get({ plain: true }));
    const badWords = await Bad.findAll({ where: { userid: userid.id } })
    const plainBad = badWords.map((item) => item.get({ plain: true }));

    //  console.log('BAD============>>>', plainBad)  

    let resultBad = [];
         for (let i =0; i<plainBad.length; i++) {
          if (plainBad[i].bword.length > 0) { 
            resultBad.push(badWords[i].bword)
          }
         
         
  }

  // console.log('RESULT============>>>', resultBad)  

      renderTemplate(Cabinet, { goodWords, resultBad, user }, res);
 
  } catch (error) {
      console.log(error);
  }
})



module.exports = router;
const express = require('express');

const router = express.Router();

const renderTemplate = require('../lib/renderTemplate');

const { Bad, Good, User } = require('../../db/models');

const Poisk = require('../views/Poisk');

router.post('/', async (req, res) => {
    // console.log('req.body----------->', req.body);
    const {gword, bword} = req.body; 
    // console.log('WORDS---------------->', gword, bword);
    const user = req.session.userName;
    try {
    const userid = await User.findOne({ where: { username: user } });
    
    const horoshee = await Good.findOrCreate( {where: { gword: gword, userid: userid.id }}); 
    const plohoe = await Bad.findOrCreate( {where: { bword: bword, userid: userid.id }}); 
  
    res.json({horoshee, plohoe});
  
    } catch (error) {
      console.log(error);
     
    }
  });

  router.get('/', async (req, res) => {
    try {
        const goodwords = await Good.findAll();
        const plainSlova = goodwords.map((item) => item.get({ plain: true }));
        // console.log('plainSlova================>>',plainSlova);
        
        let result = [];
         for (let i =0; i<plainSlova.length; i++) {
          result.push(plainSlova[i].gword)
  }
  // console.log('RESULT=======>>',result);

  const newSet = new Set(result); 
  const uniqueWords = Array.from(newSet); 

  // console.log('UNIC=======>>',uniqueWords);

         const user = req.session?.userName;
        renderTemplate(Poisk, { uniqueWords, user }, res);
   
    } catch (error) {
        console.log(error);
    }
 })
 


module.exports = router;
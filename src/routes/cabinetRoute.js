const express = require('express');

const router = express.Router();

const renderTemplate = require('../lib/renderTemplate');

// const { Tovar } = require('../../db/models')

const Cabinet = require('../views/Cabinet');

// router.get('/', async (req, res) => {
//    try {
//        const tovar = await Tovar.findAll();
//        const plainTovar = tovar.map((item) => item.get({ plain: true }));
//         const user = req.session?.userName;
//        renderTemplate(All, { plainTovar, user }, res);
  
//    } catch (error) {
//        console.log(error);
//    }
// })

router.get('/', (req, res) => {
    const user = req.session?.userName;
    renderTemplate(Cabinet, { user }, res);
  });


module.exports = router;
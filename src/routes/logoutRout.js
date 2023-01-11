
const express = require('express');

const router = express.Router();

const checkUser = require('../middlewars/checkUser');


router.get('/', checkUser, (req, res) => {
  
   req.session.destroy(() => {
     res.clearCookie('gncookies');
     res.redirect('/');
   });
 });

 module.exports = router;
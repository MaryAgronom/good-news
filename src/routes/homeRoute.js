const express = require('express');

const router = express.Router();

const renderTemplate = require('../lib/renderTemplate');

const Home = require('../views/Home');

router.get('/', (req, res) => {
  const user = req.session?.userName;
  renderTemplate(Home, { user }, res);
});


module.exports = router;

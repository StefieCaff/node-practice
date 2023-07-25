const express = require('express');
const router = express.Router();

// define home router
router.get('/', (req, res) => {
  res.send('This is the main router');
});

// define about router
router.get('/about', (req, res) => {
  res.send('About');
});

module.exports = router;
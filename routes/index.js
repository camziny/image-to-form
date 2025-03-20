const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('index', { eventData: null, imageText: null, imageSuggestions: [] });
});

module.exports = router; 
const express = require('express');
const router = express.Router();

router.route('/apft')
  .get((req, res, next) => {
    res.json({
      age: 0,
      branch: 'Army',
      gender: 0,
      pushups: 0,
      run: 0,
      scoreTotal: 0,
      situps: 0 
    })
  });

router.route('/apft/calculate')
  .post((req, res, next) => {
    res.json({ 
      success:  true,
      scoreTotal: 280 
      })
  });

module.exports = router;

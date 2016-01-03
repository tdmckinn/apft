'use strict';

const express = require('express');
const router = express.Router();
const fs = require('fs');
 
let events = {};

fs.readdir('../data/', (err, files) => {
  if (err)
    console.log(err);
  
  files.forEach((file,index) => {
    
    console.log(file);
    fs.readFile(`../data/${file}`, 'utf-8', (err, fileData) => {
      if (err)
        console.log(err);
        
      events[index] = fileData;
    });
  });

});

function calcuateApftScore(){
  
}

router.route('/apft')
  .get((req, res, next) => {
    res.json({
      success: true,
      situpsCsv: events[0],
      pushupsCsv: events[1],
      twomilerunCsv: events[2]
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

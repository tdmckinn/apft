'use strict';

const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');
const datapath = path.join(__dirname, '../../data/');
const help = require('./calcHelper');

let events = {};

fs.readdir(datapath, (err, files) => {
  if (err)
    console.log(err);
  
  files.forEach((file,index) => {
    
    //resolve after last file read?
    fs.readFile(`${datapath}/${file}`, 'utf-8', (err, fileData) => {
      if (err)
        console.log(err);
        
      events[index] = fileData;
    });
  });

});

router.route('/apft')
  .get((req, res, next) => {
    res.json({
      success: true,
      situpsCsv: events[2],
      pushupsCsv: events[1],
      twomilerunCsv: events[0]
    })
  });

router.route('/apft/calculate')
  .post((req, res, next) => {
    res.json(help.calcuateApftScore(req.body, events[2], events[1], events[0]))
  });

module.exports = router;

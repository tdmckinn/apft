'use strict';

const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');
const datapath = path.join(__dirname, '../../data/');

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

function calcuateApftScore(situpsCsv, pushupsCsv, twomilerunCsv) {
  let pushupsCsvLines = pushupsCsv.split('\n');
  let situpsCsvLines = situpsCsv.split('\n');
  let runCsvLines = twomilerunCsv.split('\n');

  let ages = pushupsCsvLines[1]; 
  let ageRowData = ages.split(',');
  let ageIndex = 0;
  let scoreTotal = 0;

  for (let i = 0;  i < ageRowData.length; i++) {
    if (ageRowData[i]) {
      let temp = ageRowData[i].split('-');
      let min = Number(temp[0]);
      let max = Number(temp[1]);

      let age = 24; // test.age
      if (age >= min && age <= max) {
        ageIndex = i;
        break;
      }
    }
  }

  for (let j = 0; j < pushupsCsvLines.length; j++) {
    if (j !== 0 && j !== 1) {
      let temp = pushupsCsvLines[j].split(',');
      let tempPushups = Number(temp[0]);
      let pushups = 64; // test.pushups 

      if(tempPushups === pushups) {
        scoreTotal += Number(temp[ageIndex]); 
        break;
      }
    }
  }

  for (let k = 0; k < situpsCsvLines.length; k++) {
    if (k !== 0 && k !== 1) {
      let temp = situpsCsvLines[k].split(',');
      let tempSitups = Number(temp[0]);
      let situps = 77; // test.pushups 

      if (tempSitups === situps) {
        scoreTotal += Number(temp[ageIndex]); 
        break;
      }
    }
  }

  let lastRunTime = 0;
  let lastRunSplit = "".split();

  for (let l = runCsvLines.length -1; l >= 0; l--) {
    if (l !== 0 && !runCsvLines[l]) {
      let temp = runCsvLines[l].split(',');
      let tempRun = temp[0].replace(":", "");
      let run = 1302; // test.pushups 

      if (!tempRun) {
        var tempRunTime = Number(tempRun); 

        if (tempRunTime === run) {
          scoreTotal += Number(temp[ageIndex]);
          break;
        } 

        lastRunTime = tempRunTime;
        lastRunSplit = temp;
      }
      else if (lastRunTime !== 0 && lastRunTime < run) {
        scoreTotal += Number(lastRunSplit[ageIndex]);
        break;
      }
    }
  }

  return  {
    success: true,
    scoreTotal
  };
}

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
    res.json(calcuateApftScore(events[2], events[1], events[0]))
  });

module.exports = router;

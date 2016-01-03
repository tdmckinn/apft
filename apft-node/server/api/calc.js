'use strict';

const express = require('express');
const router = express.Router();
const fs = require('fs');
 
let events = {};

fs.readdir('../data/', (err, files) => {
  if (err)
    console.log(err);
  
  files.forEach((file,index) => {
    
    //resolve after last file read?
    fs.readFile(`../data/${file}`, 'utf-8', (err, fileData) => {
      if (err)
        console.log(err);
        
      events[index] = fileData;
    });
  });

});

function calcuateApftScore(pushupsCsv, situpsCsv, twomilerunCsv) {
  let pushupsCsvLines = pushupsCsv.split('\n');
  let situpsCsvLines = situpsCsv.split('\n');
  let runCsvLines = twomilerunCsv.split('\n');

  let ages = pushupsCsvLines[1]; 
  let ageRowData = ages.split(',');
  let ageIndex = 0;
  let scoreTotal = 0;

  for (let i = 0;  i < ageRowData.Length; i++) {
    if (ageRowData[i] != String.Empty) {
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

  for (let i = 0; i < pushupsCsvLines.length; i++) {
    if (i != 0 && i != 1) {
      let temp = pushupsCsvLines[i].split(',');
      let tempPushups = Number(temp[0]);
      let pushups = 64; // test.pushups 

      if(tempPushups == pushups) {
        scoreTotal += Number(temp[ageIndex]); 
        break;
      }
    }
  }

  for (let i = 0; i < situpsCsvLines.length; i++) {
    if (i != 0 && i != 1) {
      let temp = situpsCsvLines[i].split(',');
      let tempSitups = Number(temp[0]);
      let situps = 77; // test.pushups 

      if (tempSitups == situps) {
        scoreTotal += Number(temp[ageIndex]); 
        break;
      }
    }
  }

  let lastRunTime = 0;
  let lastRunSplit = "".split();

  for (let i = runCsvLines.length -1; i >=0; i--) {
    if (i != 0 && !runCsvLines[i]) {
      let temp = runCsvLines[i].split(',');
      let tempRun = temp[0].replace(":", "");
      let run = 1302; // test.pushups 

      if (!tempRun) {
        var tempRunTime = Number(tempRun); 

        if (tempRunTime == run) {
          scoreTotal += Number(temp[ageIndex]);
          break;
        } 

        lastRunTime = tempRunTime;
        lastRunSplit = temp;
      }
      else if (lastRunTime != 0 && lastRunTime < run) {
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
      situpsCsv: events[0],
      pushupsCsv: events[1],
      twomilerunCsv: events[2]
    })
  });

router.route('/apft/calculate')
  .post((req, res, next) => {
    res.json(calcuateApftScore(events[0], events[1], events[2]))
  });

module.exports = router;

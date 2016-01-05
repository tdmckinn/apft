'use strict';

function eventTotal(csvlines, ageIndex, eventValue) {
  
    let eventTotal = 0;
    
    for (let j = 0; j < csvlines.length; j++) {
    if (j !== 0 && j !== 1) {
      let temp = csvlines[j].split(',');
      let tempEventVal = Number(temp[0]);
      let eventVal = Number(eventValue); 

      if(tempEventVal === eventVal) {
        eventTotal += Number(temp[ageIndex]); 
        break;
      }
    }
  }
  
  return eventTotal;
}

function calcuateApftScore(apft, situpsCsv, pushupsCsv, twomilerunCsv) {
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

      let age = Number(apft.age);
      if (age >= min && age <= max) {
        ageIndex = i;
        break;
      }
    }
  }

 scoreTotal += eventTotal(pushupsCsvLines, ageIndex, apft.pushups); 
 scoreTotal += eventTotal(situpsCsvLines, ageIndex, apft.situps); 
 
  let lastRunTime = 0;
  let lastRunSplit;

  for (let l = runCsvLines.length -1; l >= 0; l--) {
    if (l !== 0 && !runCsvLines[l]) {
      let temp = runCsvLines[l].split(',');
      let tempRun = temp[0].replace(":", "");
      let run = Number(apft.run);

      if (!tempRun) {
        let tempRunTime = Number(tempRun); 

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

module.exports = {
  eventTotal,
  calcuateApftScore
}
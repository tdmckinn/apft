
/*
 * APFT specfic action types / consts
 */
import * as request from 'superagent';

const CALC_APFT_SCORE = 'CALC_APFT_SCORE';
const EDIT_PT_EVENT = 'EDIT_PT_EVENT';
const RESET_PT_SHEET = 'RESET_PT_SHEET';
const GET_CSV_DATA = 'GET_CSV_DATA';
const ROOT = 'http://localhost:61292';

export const ActionTypes = {
  CALC_APFT_SCORE,
  EDIT_PT_EVENT,
  RESET_PT_SHEET,
  GET_CSV_DATA
}

export function calculatePtScore(res) {
  let { scoreTotal } = res;

  return {
    type: ActionTypes.CALC_APFT_SCORE,
    scoreTotal
  }
}

export function editPtEvent(event) {
  return {
    type: ActionTypes.EDIT_PT_EVENT,
    event
  }
}

export function resetPtSheet() {
  return {
    type: ActionTypes.RESET_PT_SHEET
  };
}

export function recieveCsvData(eventStandards) {

  let csvData = {};

  Object.keys(eventStandards).forEach(function (key) {
    let val = eventStandards[key];

    if (val !== true) {
      let parsedData = window.Papa.parse(val);
      
      if (parsedData.data.length !== 0)
        csvData[key] = window.Papa.parse(val);
    }
  }); 

  return {
    type: GET_CSV_DATA,
    csvData
  }
}

export function loadCsvData() {
  return dispatch => {
    request.get(`${ROOT}/api/apft`)
      .set('Accept', 'application/json')
      .end(function (err, res) { 
        if (res && res.body.success) { 
          console.log(res.body);
          dispatch(recieveCsvData(res.body));
        }
     });
  }
};

export function calcApftRequest(state) {

  let { sex, run, pushups, age, gender, branch, situps } = state;
   
  return dispatch => {
    request.post(`${ROOT}/api/apft/calculate`)
      .send({ 
        run,
        pushups,
        situps,
        age,
        gender,
        branch
      })
      .set('Accept', 'application/json')
      .end(function (err, res) {

        if (res) {
          dispatch(calculatePtScore(res.body));
        }
      });
  }
};

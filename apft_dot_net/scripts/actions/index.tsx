
/// <reference path="../../typings/superagent/superagent.d.ts" />

/*
 * APFT specfic action types / consts
 */
import * as request from 'superagent';

const CALC_APFT_SCORE: string = 'CALC_APFT_SCORE'
const EDIT_PT_EVENT: string = 'EDIT_PT_EVENT'
const RESET_PT_SHEET: string = 'RESET_PT_SHEET'
const GET_CSV_DATA: string = 'GET_CSV_DATA'
const ROOT = 'http://localhost:61292'

// extend Window Object since Parse is going to be used in the global scope
// @TODO: move this out to globals section
interface MyWindow extends Window {
  Papa: {
    parse: Function
  }
}

declare var window: MyWindow;

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

export function editPtEvent(event: string) {
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

export function recieveCsvData(eventStandards: any) {

  let csvData = {};

  Object.keys(eventStandards).forEach(function (key) {
    let val = eventStandards[key];
    if (val !== true) {
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
          dispatch(recieveCsvData(res.body));
        }
     });
  }
};

export function calcApftRequest(state: any) {

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
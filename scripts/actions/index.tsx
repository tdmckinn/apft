
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
  RESET_PT_SHEET
}

export function calculatePtScore() {
  return {
    type: ActionTypes.CALC_APFT_SCORE
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

export function recieveCsvData(eventStandards: JSON) {
  console.log(window.Papa)
  return {
    type: GET_CSV_DATA,
    json: window.Papa.parse(eventStandards)
  }
}

export function loadCsvData() {
  return dispatch => {
    request.get(`${ROOT}/api/apft`)
      .set('Accept', 'application/json')
      .end(function (err, res) {
        debugger;

        if (res) {
          dispatch(recieveCsvData(res.text));
        }
      });
  }
};
﻿
import { ActionTypes } from '../actions/index';

enum Gender {
  Male,
  Female
}

interface ApftEvents {
  run?: number;
  pushups?: number;
  situps?: number;
  pullups?: number;
  age?: number;
  sex?: number;
}

const initialState = {
  sex: 0,
  run: 0,
  pushups: 0,
  situps: 0,
  age: Gender.Male
}

export function apft(state: ApftEvents, action) {

  state = state || initialState;
  switch (action.type) {
    case ActionTypes.CALC_APFT_SCORE:
      return action.event;
    case ActionTypes.CALC_APFT_SCORE:
      return state;
    case ActionTypes.RESET_PT_SHEET:
      return state;
    default:
      return state;
  }
}
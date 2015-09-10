
import { ActionTypes } from '../actions/index';

interface ApftEvents {
  run?: number;
  pushups?: number;
  situps?: number;
  pullups?: number;
}

const initialState = {
  run: 0,
  pushups: 0,
  situps: 0
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
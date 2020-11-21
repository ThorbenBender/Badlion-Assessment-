import { GET_CONTESTANTS, GET_LEAGUE, GET_RESULTS } from '../action/ActionType';

const intitialState = {
  league: {},
  results: {},
  contestants: {},
  error: null,
};

export function league(state = intitialState.league, action) {
  switch (action.type) {
    case GET_LEAGUE:
      return action.payload;
    default:
      return state;
  }
}

export function results(state = intitialState.results, action) {
  switch (action.type) {
    case GET_RESULTS:
      return action.payload;
    default:
      return state;
  }
}

export function contestants(state = intitialState.contestants, action) {
  switch (action.type) {
    case GET_CONTESTANTS:
      return action.payload;
    default:
      return state;
  }
}

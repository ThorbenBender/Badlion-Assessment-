import {
  GET_CONTESTANTS,
  GET_LEAGUE,
  GET_RESULTS,
  SORT_BY_OLD,
  SORT_BY_NEW,
} from '../action/ActionType';

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
    case SORT_BY_NEW:
      let newState = state.sort((x, y) => {
        return new Date(x.beginAt) - new Date(y.beginAt);
      });
      return newState;
    case SORT_BY_OLD:
      let otherState = state.sort((x, y) => {
        return new Date(y.beginAt) - new Date(x.beginAt);
      });
      return otherState;
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

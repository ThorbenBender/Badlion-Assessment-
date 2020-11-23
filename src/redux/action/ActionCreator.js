import {
  GET_LEAGUE,
  GET_RESULTS,
  GET_CONTESTANTS,
  SORT_BY_NEW,
  SORT_BY_OLD,
} from './ActionType';
import axios from 'axios';

const API_URL = 'https://api.eslgaming.com/play/v1';

export const getLeague = (id) => async (dispatch) => {
  let result = await axios.get(`${API_URL}/leagues/${id}`);
  dispatch({ type: GET_LEAGUE, payload: result.data });
};

export const getResults = (id) => async (dispatch) => {
  let result = await axios.get(`${API_URL}/leagues/${id}/results`);
  dispatch({ type: GET_RESULTS, payload: result.data });
};

export const getContestants = (id) => async (dispatch) => {
  let result = await axios.get(`${API_URL}/leagues/${id}/contestants`);
  dispatch({ type: GET_CONTESTANTS, payload: result.data });
};

export const sortResultsByNew = () => (dispatch) => {
  dispatch({ type: SORT_BY_NEW });
};

export const sortResultsByOld = () => (dispatch) => {
  dispatch({ type: SORT_BY_OLD });
};

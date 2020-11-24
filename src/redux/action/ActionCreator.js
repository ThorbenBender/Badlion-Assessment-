import {
  GET_LEAGUE,
  GET_RESULTS,
  GET_CONTESTANTS,
  SORT_BY_NEW,
  SORT_BY_OLD,
} from './ActionType';
import axios from 'axios';

const API_URL = 'https://badlion-assessment.herokuapp.com';

export const getLeague = (id) => async (dispatch) => {
  let result = await axios.get(`${API_URL}/leagues/${id}`);
  let data = JSON.parse(result.data);
  dispatch({ type: GET_LEAGUE, payload: data });
};

export const getResults = (id) => async (dispatch) => {
  let result = await axios.get(`${API_URL}/leagues/${id}/results`);
  let data = JSON.parse(result.data);
  dispatch({ type: GET_RESULTS, payload: data });
};

export const getContestants = (id) => async (dispatch) => {
  let result = await axios.get(`${API_URL}/leagues/${id}/contestants`);
  let data = JSON.parse(result.data);
  dispatch({ type: GET_CONTESTANTS, payload: data });
};

export const sortResultsByNew = () => (dispatch) => {
  dispatch({ type: SORT_BY_NEW });
};

export const sortResultsByOld = () => (dispatch) => {
  dispatch({ type: SORT_BY_OLD });
};

import {combineReducers} from 'redux';

import dataReducer, * as fromDataReducer from './data-reducer';
import filterReducer from './filter-reducer';
import {ROOT_ID} from '../constants/common';

const reducer = combineReducers({
  data: dataReducer,
  filter: filterReducer
});

export default reducer;

export const getPageId = ({match}) => {
  return match.path === ROOT_ID ? ROOT_ID : match.params.id;
};

export const getFilteredPersons = (state, id) => {
  const persons = fromDataReducer.getFilteredPersons(state.data.persons, state.filter.ids[id]);
  return persons.slice(0, state.filter.visibleCardsCount);
};

export const getCurrentPerson = (state, id) => {
  return fromDataReducer.getPersonById(state.data.persons, id);
};

const getPersonFriends = (state, {friends}) => {
  return fromDataReducer.getFriends(state.data.persons, friends);
};

export const getFilteredFriends = (state, person, id) => {
  const friends = getPersonFriends(state, person);
  const filteredFriends = fromDataReducer.getFilteredPersons(friends, state.filter.ids[id]);
  return filteredFriends.slice(0, state.filter.visibleCardsCount);
};

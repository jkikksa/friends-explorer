import {FETCH_DATA, FETCH_ERROR} from '../constants/action-types';
import {Gender} from '../constants/common';

const reducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_DATA:
      return Object.assign({}, state, {
        persons: action.persons,
        isFetching: false
      });
    case FETCH_ERROR:
      return Object.assign({}, state, {
        isFetchError: true
      });
    default:
      return state;
  }
};

export default reducer;

const nameFilter = (name, query) => {
  return name.toLowerCase().includes(query.toLowerCase());
};

const genderFilter = (gender, genderQuery) => {
  return genderQuery === Gender.ALL ? true : gender === genderQuery;
};

const ageFilter = (age, ageQuery) => {
  if (ageQuery.from > ageQuery.to) {
    return age >= ageQuery.from;
  }
  return age >= ageQuery.from && age <= ageQuery.to;
};

const companyFilter = (company, query) => {
  return company.toLowerCase().includes(query.toLowerCase());
};

export const getFilteredPersons = (persons, {name: nameQuery, gender: genderQuery, age: ageQuery, company: companyQuery}) => {
  return persons.filter((person) => {
    return genderFilter(person.gender, genderQuery) &&
           nameFilter(person.name, nameQuery) &&
           ageFilter(person.age, ageQuery) &&
           companyFilter(person.company, companyQuery);
  });
};

export const getPersonById = (persons, id) => {
  return persons.find((it) => it.id === +id);
};

export const getFriends = (persons, friendsList) => {
  return friendsList.reduce((acc, friend) => {
    const result = persons.find((person) => person.id === friend);

    if (typeof result === 'undefined') {
      return acc;
    }
    acc.push(result);
    return acc;
  }, []);
};

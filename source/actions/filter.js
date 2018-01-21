import {
  INCREASE_COUNT,
  RESET_FILTER,
  SET_AGE_FILTER,
  SET_COMPANY_FILTER,
  SET_GENDER_FILTER,
  SET_NAME_FILTER
} from '../constants/action-types';

export const setGenderFilter = (id, gender) => {
  return {
    type: SET_GENDER_FILTER,
    id,
    genderFilter: gender
  };
};

export const setNameFilter = (id, value) => {
  return {
    type: SET_NAME_FILTER,
    id,
    nameFilter: value
  };
};

export const setAgeFilter = (id, age) => {
  return {
    type: SET_AGE_FILTER,
    id,
    ageFilter: age
  };
};

export const setCompanyFilter = (id, value) => {
  return {
    type: SET_COMPANY_FILTER,
    id,
    companyFilter: value
  };
};

export const resetFilter = (id) => {
  return {
    type: RESET_FILTER,
    id
  };
};

export const increaseCount = () => {
  return {
    type: INCREASE_COUNT
  };
};

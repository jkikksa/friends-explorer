import {INITIAL_FILTER_STATE} from '../constants/filter';
import {ROOT_ID, PERSON_PAGE_PATH, INITIAL_VISIBLE_CARDS} from '../constants/common';
import {
  INCREASE_COUNT,
  LOCATION_CHANGE,
  RESET_FILTER,
  SET_AGE_FILTER,
  SET_COMPANY_FILTER,
  SET_GENDER_FILTER,
  SET_NAME_FILTER
} from '../constants/action-types';

export default (state = {}, action) => {
  switch (action.type) {
    case SET_GENDER_FILTER:
      return Object.assign({}, state, {
        ids: Object.assign({}, state.ids, {
          [action.id]: Object.assign({}, state.ids[action.id], {
            gender: action.genderFilter,
          })
        }),
        visibleCardsCount: INITIAL_VISIBLE_CARDS
      });
    case SET_NAME_FILTER:
      return Object.assign({}, state, {
        ids: Object.assign({}, state.ids, {
          [action.id]: Object.assign({}, state.ids[action.id], {
            name: action.nameFilter,
          })
        }),
        visibleCardsCount: INITIAL_VISIBLE_CARDS
      });
    case SET_AGE_FILTER:
      return Object.assign({}, state, {
        ids: Object.assign({}, state.ids, {
          [action.id]: Object.assign({}, state.ids[action.id], {
            age: action.ageFilter,
          })
        }),
        visibleCardsCount: INITIAL_VISIBLE_CARDS
      });
    case SET_COMPANY_FILTER:
      return Object.assign({}, state, {
        ids: Object.assign({}, state.ids, {
          [action.id]: Object.assign({}, state.ids[action.id], {
            company: action.companyFilter,
          })
        }),
        visibleCardsCount: INITIAL_VISIBLE_CARDS
      });
    case RESET_FILTER:
      return Object.assign({}, state, {
        ids: Object.assign({}, state.ids, {
          [action.id]: INITIAL_FILTER_STATE
        }),
        visibleCardsCount: INITIAL_VISIBLE_CARDS
      });
    case INCREASE_COUNT:
      return Object.assign({}, state, {
        visibleCardsCount: state.visibleCardsCount + INITIAL_VISIBLE_CARDS
      });
    case LOCATION_CHANGE:
      if (action.payload.pathname === ROOT_ID) {
        return state;
      }
      const [, id] = action.payload.pathname.split(PERSON_PAGE_PATH);
      if (state.ids.hasOwnProperty(id)) {
        return state;
      }
      return Object.assign({}, state, {
        ids: Object.assign({}, state.ids, {
          [id]: INITIAL_FILTER_STATE
        }),
        visibleCardsCount: INITIAL_VISIBLE_CARDS
      });
    default:
      return state;
  }
};

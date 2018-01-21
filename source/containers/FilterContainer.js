import {connect} from 'react-redux';

import Filter from '../components/Filter';

import {setAgeFilter, setCompanyFilter, setGenderFilter, setNameFilter} from '../actions/filter';

const mapStateToProps = (state, {id}) => {
  return {
    filter: state.filter.ids[id]
  };
};

const mapDispatchToProps = (dispatch, {id}) => {
  return {
    onAgeFilterChange: (age) => dispatch(setAgeFilter(id, age)),
    onCompanyFilterChange: (value) => dispatch(setCompanyFilter(id, value)),
    onGenderFilterChange: (sex) => dispatch(setGenderFilter(id, sex)),
    onNameFilterChange: (value) => dispatch(setNameFilter(id, value))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);

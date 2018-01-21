import PropTypes from 'prop-types';
import React, {Fragment} from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';

import FilterContainer from './FilterContainer';
import PersonsList from '../components/PersonsList';

import {getPageId, getFilteredPersons} from '../reducers';
import {resetFilter} from '../actions/filter';

const PageTitle = styled.h1`
  font-size: 60px;
  font-weight: 300;
  line-height: 80px;
  margin-bottom: 62px;
  margin-top: 0;
  text-align: center;
`;

const MainPage = ({id, persons, onPersonCardClick}) => {
  return (
    <Fragment>
      <PageTitle>Friends explorer</PageTitle>
      <FilterContainer id={id}/>
      <PersonsList persons={persons} onPersonCardClick={onPersonCardClick}/>
    </Fragment>
  );
};

MainPage.propTypes = {
  onPersonCardClick: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  persons: PropTypes.array.isRequired
};

const mapStateToProps = (state, ownProps) => {
  const id = getPageId(ownProps);
  const persons = getFilteredPersons(state, id);

  return {id, persons};
};

const mapDispatchToProps = (dispatch) => {
  return {
    onPersonCardClick: (id) => dispatch(resetFilter(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);

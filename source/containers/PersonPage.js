import PropTypes from 'prop-types';
import React, {Fragment} from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

import FilterContainer from './FilterContainer';
import PersonInfo from '../components/PersonInfo';
import PersonsList from '../components/PersonsList';

import {ROOT_ID} from '../constants/common';
import {getPageId, getCurrentPerson, getFilteredFriends} from '../reducers';
import {resetFilter} from '../actions/filter';

const Wrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin-bottom: 37px;
`;

const StyledLink = styled(Link)`
  color: inherit;
  font-size: 19px;
  line-height: 30px;
  text-decoration: none;
  text-transform: uppercase;

  &:hover {
    text-decoration: underline;
  }
`;

const PersonPage = ({friends, id, person, onBackLinkClick, onPersonCardClick}) => {
  const onLinkClick = () => {
    onBackLinkClick(ROOT_ID);
    window.scrollTo(0, 0);
  };
  return (
    <Fragment>
      <Wrapper>
        <PersonInfo person={person}/>
        <StyledLink to={ROOT_ID} onClick={onLinkClick}>Back</StyledLink>
      </Wrapper>
      <FilterContainer id={id}/>
      <PersonsList persons={friends} onPersonCardClick={onPersonCardClick}/>
    </Fragment>
  );
};

PersonPage.propTypes = {
  friends: PropTypes.array.isRequired,
  id: PropTypes.string.isRequired,
  onBackLinkClick: PropTypes.func.isRequired,
  onPersonCardClick: PropTypes.func.isRequired,
  person: PropTypes.object.isRequired
};

const mapStateToProps = (state, ownProps) => {
  const id = getPageId(ownProps);
  const person = getCurrentPerson(state, id);
  const friends = getFilteredFriends(state, person, id);
  return {friends, id, person};
};

const mapDispatchToProps = (dispatch) => {
  return {
    onBackLinkClick: (id) => dispatch(resetFilter(id)),
    onPersonCardClick: (id) => dispatch(resetFilter(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PersonPage);

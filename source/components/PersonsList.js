import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import PersonCard from './PersonCard';

const List = styled.ul`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  list-style: none;
  margin-bottom: 0;
  margin-top: 0;
  padding-left: 0;
`;

const ListItem = styled.li`
  margin-bottom: 23px;
`;

const PersonsList = (props) => {
  return (
    <List>
      {props.persons.map((it, index) => {
        return (
          <ListItem key={index}>
            <PersonCard person={it} onClick={props.onPersonCardClick} />
          </ListItem>);
      })}
    </List>
  );
};

PersonsList.propTypes = {
  onPersonCardClick: PropTypes.func.isRequired,
  persons: PropTypes.arrayOf(PropTypes.shape({
    age: PropTypes.number.isRequired,
    company: PropTypes.string.isRequired,
    gender: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired
  })).isRequired
};

export default PersonsList;

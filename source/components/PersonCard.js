import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

import {PERSON_PAGE_PATH} from '../constants/common';

const StyledLink = styled(Link)`
  color: inherit;
  display: block;
  text-decoration: none;

  &:hover {
    opacity: 0.5;
  }
`;

const Title = styled.h2`
  font-size: 26px;
  font-weight: 300;
  line-height: 32px;
  margin-bottom: 0;
  margin-top: 0;
`;

const Info = styled.p`
  color: #777777;
  font-weight: 300;
  margin-bottom: 0;
  margin-top: 0;
`;

const PersonCard = (props) => {
  const person = props.person;
  const onClick = () => {
    props.onClick(person.id);
    window.scrollTo(0, 0);
  };
  return (
    <StyledLink to={`${PERSON_PAGE_PATH}${person.id}`} onClick={onClick}>
      <Title>{person.name}</Title>
      <Info>
        {`${person.gender}, ${person.age} y.o., works for ${person.company}`}
      </Info>
    </StyledLink>
  );
};

PersonCard.propTypes = {
  onClick: PropTypes.func.isRequired,
  person: PropTypes.shape({
    age: PropTypes.number.isRequired,
    company: PropTypes.string.isRequired,
    gender: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired
  })
};

export default PersonCard;

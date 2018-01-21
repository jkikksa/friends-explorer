import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const Title = styled.h1`
  font-size: 40px;
  font-weight: 300;
  line-height: 50px;
  margin-bottom: 0;
  margin-top: 0;
`;

const Info = styled.p`
  font-size: 24px;
  line-height: 30px;
  margin-bottom: 5px;
  margin-top: 0;
`;

const Email = styled.p`
  color: #777777;
  font-size: 17px;
  line-height: 20px;
  margin-bottom: 0;
  margin-top: 0;
`;

const PersonInfo = (props) => {
  const person = props.person;
  return (
    <div>
      <Title>{person.name}</Title>
      <Info>{`${person.gender}, ${person.age} y.o., works for ${person.company}`}</Info>
      <Email>{person.email}</Email>
    </div>
  );
};

PersonInfo.propTypes = {
  person: PropTypes.shape({
    age: PropTypes.number.isRequired,
    company: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    gender: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired
  }).isRequired
};

export default PersonInfo;

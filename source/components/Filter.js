import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import NumberField from './NumberField';
import RadioButton from './RadioButton';

import {Gender, Age} from '../constants/common';

const Form = styled.form`
  margin-bottom: 58px;
`;

const SearchField = styled.input`
  border: 1px solid #000000;
  box-sizing: border-box;
  color: #000000;
  font-family: inherit;
  font-size: 18px;
  font-weight: 300;
  line-height: 24px;
  padding-bottom: 8px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 8px;
  width: 100%;
  margin-bottom: 26px;
  border-radius: 0;
  box-shadow: none;

  &::placeholder {
    color: #999999;
  }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const GenderFilters = styled.ul`
  display: flex;
  width: 220px;
  list-style: none;
  padding-left: 0;
  margin-top: 0;
  margin-bottom: 0;
  flex-shrink: 0;
  align-items: center;
`;

const GenderItem = styled.li`
  margin-right: 5px;
`;

const AgeFilters = styled.div`
  width: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CompanyFilter = styled.div`
  width: 270px;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  label {
    margin-right: 10px;
    color: #999999;
    font-size: 16px;
    display: block;
    line-height: 24px;
  }
`;

const CompanyField = styled.input`
  border: 1px solid #999999;
  box-sizing: border-box;
  display: block;
  font-family: inherit;
  font-size: 16px;
  font-weight: 300;
  line-height: 24px;
  padding-bottom: 2px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 2px;
  width: 180px;
`;

const Filter = (props) => {
  const {
    name,
    gender,
    age: {from: ageFrom, to: ageTo},
    company
  } = props.filter;

  const onAgeChange = (evt) => {
    const value = +evt.target.value;
    switch (evt.target.id) {
      case Age.FROM:
        props.onAgeFilterChange({
          from: value,
          to: ageTo
        });
        break;
      case Age.TO:
        props.onAgeFilterChange({
          from: ageFrom,
          to: value
        });
        break;
    }
  };

  const onCompanyChange = (evt) => {
    props.onCompanyFilterChange(evt.target.value);
  };

  const onGenderChange = (evt) => {
    props.onGenderFilterChange(evt.target.id);
  };

  const onNameChange = (evt) => {
    props.onNameFilterChange(evt.target.value.trimLeft());
  };

  return (
    <Form>
      <SearchField type="search" value={name} onChange={onNameChange} placeholder="search" />
      <Wrapper>
        <GenderFilters>
          <GenderItem>
            <RadioButton id="male" name="gender" checked={gender === Gender.MALE} onChange={onGenderChange}>male /</RadioButton>
          </GenderItem>
          <GenderItem>
            <RadioButton id="female" name="gender" checked={gender === Gender.FEMALE} onChange={onGenderChange}>female /</RadioButton>
          </GenderItem>
          <GenderItem>
            <RadioButton id="all" name="gender" checked={gender === Gender.ALL} onChange={onGenderChange}>not specified</RadioButton>
          </GenderItem>
        </GenderFilters>
        <AgeFilters>
          <NumberField id="from" name="age" min="1" max="150" value={ageFrom} onChange={onAgeChange}>age from</NumberField>
          <NumberField id="to" name="age" min="1" max="150" value={ageTo} onChange={onAgeChange}>to</NumberField>
        </AgeFilters>
        <CompanyFilter>
          <label htmlFor="company">works for</label>
          <CompanyField id="company" type="search" value={company} onChange={onCompanyChange}/>
        </CompanyFilter>
      </Wrapper>
    </Form>
  );
};

Filter.propTypes = {
  onAgeFilterChange: PropTypes.func.isRequired,
  onCompanyFilterChange: PropTypes.func.isRequired,
  onGenderFilterChange: PropTypes.func.isRequired,
  onNameFilterChange: PropTypes.func.isRequired,
  filter: PropTypes.shape({
    age: PropTypes.shape({
      from: PropTypes.number.isRequired,
      to: PropTypes.number.isRequired,
    }).isRequired,
    company: PropTypes.string.isRequired,
    gender: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  }).isRequired
};

export default Filter;

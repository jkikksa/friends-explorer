import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  align-items: center;
  display: flex;
  margin-right: 10px;

  label {
    color: #999999;
    display: block;
    font-size: 16px;
    line-height: 24px;
    margin-right: 10px;
  }

  input {
    border: 1px solid #999999;
    box-sizing: border-box;
    display: block;
    font-family: inherit;
    font-size: 16px;
    font-weight: 300;
    line-height: 24px;
    padding-bottom: 2px;
    padding-left: 12px;
    padding-top: 2px;
    text-align: center;
    width: 60px;
  }
`;

const NumberField = ({children, id, max, min, name, onChange, value}) => {
  return (
    <Wrapper>
      <label htmlFor={id}>{children}</label>
      <input type="number" id={id} max={max} min={min} name={name} onChange={onChange} value={value}/>
    </Wrapper>
  );
};

NumberField.propTypes = {
  children: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  max: PropTypes.string.isRequired,
  min: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.number.isRequired
};

export default NumberField;


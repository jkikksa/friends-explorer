import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  label {
    color: #999999;
    display: block;
    font-size: 16px;
    line-height: 24px;
    padding-bottom: 3px;
    padding-top: 3px;

    &:hover {
      color: #555555;
    }
  }
  input {
    display: none;

    &:checked + label {
      color: #000000;
    }
  }
`;

const RadioButton = ({checked, children, id, name, onChange}) => {
  return (
    <Wrapper>
      <input type="radio" id={id} name={name} onChange={onChange} checked={checked}/>
      <label htmlFor={id}>{children}</label>
    </Wrapper>
  );
};

RadioButton.propTypes = {
  checked: PropTypes.bool.isRequired,
  children: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default RadioButton;


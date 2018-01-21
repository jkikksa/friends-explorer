import PropTypes from 'prop-types';
import React from 'react';
import styled, {keyframes} from 'styled-components';
import {connect} from 'react-redux';

const lineScale = keyframes`
  0% {
    transform: scaley(1);
  }
  50% {
    transform: scaley(0.4);
  }
  100% {
    transform: scaley(1);
  }
`;

const Screen = styled.div`
  align-items: center;
  background-color: #ffffff;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
`;

const Animation = styled.div`
  display: flex;
  height: 30px;
  justify-content: space-between;
  margin-bottom: 10px;
  width: 33px;
`;

const Line = styled.div`
  animation-fill-mode: both;
  background-color: #777777;
  border-radius: 3px;
  height: 100%;
  width: 3px;

  &:nth-child(1) {
    animation: ${lineScale} 1s -0.4s infinite cubic-bezier(0.2, 0.68, 0.18, 1.08);
  }

  &:nth-child(2) {
    animation: ${lineScale} 1s -0.3s infinite cubic-bezier(0.2, 0.68, 0.18, 1.08);
  }

  &:nth-child(3) {
    animation: ${lineScale} 1s -0.2s infinite cubic-bezier(0.2, 0.68, 0.18, 1.08);
  }

  &:nth-child(4) {
    animation: ${lineScale} 1s -0.1s infinite cubic-bezier(0.2, 0.68, 0.18, 1.08);
  }

  &:nth-child(5) {
    animation: ${lineScale} 1s 0s infinite cubic-bezier(0.2, 0.68, 0.18, 1.08);
  }
`;

const Text = styled.div`
  font-size: 24px;
  line-height: 30px;
`;

const LoadingScreen = ({isFetchError}) => {
  return (
    isFetchError
      ?
      <Screen>
        <Text>LOADING DATA ERROR</Text>
      </Screen>
      :
      <Screen>
        <Animation>
          <Line></Line>
          <Line></Line>
          <Line></Line>
          <Line></Line>
          <Line></Line>
        </Animation>
        <Text>...LOADING...</Text>
      </Screen>
  );
};

LoadingScreen.propTypes = {
  isFetchError: PropTypes.bool.isRequired
};

const mapStateToProps = (state) => {
  return {
    isFetchError: state.data.isFetchError
  };
};

export default connect(mapStateToProps)(LoadingScreen);

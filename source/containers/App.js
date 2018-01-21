import PropTypes from 'prop-types';
import React from 'react';
import styled, {injectGlobal} from 'styled-components';
import {Route, Switch} from 'react-router-dom';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

import MainPage from '../containers/MainPage';
import PersonPage from '../containers/PersonPage';
import LoadingScreen from '../containers/LoadingScreen';

import {SCROLL_OFFSET} from '../constants/common';
import {increaseCount} from '../actions/filter';

import '../fonts/fonts.css';

// eslint-disable-next-line
injectGlobal`
  body {
    font-family: 'Open Sans', 'Arial', sans-serif;
    font-size: 18px;
    font-weight: 300;
    line-height: 24px;
    overflow-y: scroll;
  }
`;

const Content = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 768px;
  padding-top: 50px;
`;

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    window.onscroll = () => {
      if (window.pageYOffset + window.innerHeight >= document.body.scrollHeight - SCROLL_OFFSET) {
        this.props.onBottomScroll();
      }
    };
  }

  render() {
    return (
      this.props.isFetching
        ?
        <LoadingScreen/>
        :
        <Content>
          <Switch>
            <Route exact path="/" component={MainPage} />
            <Route path="/person/:id" component={PersonPage} />
          </Switch>
        </Content>
    );
  }
}

App.propTypes = {
  onBottomScroll: PropTypes.func.isRequired,
  isFetching: PropTypes.bool.isRequired
};

const mapStateToProps = (state) => {
  return {
    isFetching: state.data.isFetching
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onBottomScroll: () => dispatch(increaseCount())
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));

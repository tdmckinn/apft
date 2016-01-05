
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Header from '../components/Header';
import MainSection from '../components/MainSection';
import * as ApftActions from '../actions/index';

class App extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    const { apft, dispatch } = this.props;

    return (
    <div>
      <Header apft={apft} dispatch={dispatch} />
      <MainSection apft={apft} dispatch={dispatch}/>
    </div>
    );
  }
}

function mapStateToProps(state) {

  const { apft, dispatch } = state

  return {
    apft,
    dispatch
  };
}

export default connect(mapStateToProps)(App);

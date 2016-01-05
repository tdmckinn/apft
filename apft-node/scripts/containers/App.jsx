
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Header from '../components/Header';
import * as ApftActions from '../actions/index';
import FitnessTable from '../components/Tables';
import ApftForm from '../components/ApftForm';

class App extends Component {

  constructor(props) {
    super(props);
    this.handleChange = this.handleClick.bind(this)

  }
  
  handleClick(e) {
    
    console.log(e);
  }

  render() {
    const { apft, dispatch } = this.props;

    return (
    <div>
      <Header apft={apft} onClick={this.handleClick} />
      <ApftForm apft={apft} dispatch={dispatch} />
      <FitnessTable apft={apft} />
    </div>
    );
  }
}

function mapStateToProps(state) {

  const { apft } = state

  return {
    apft
  };
}

export default connect(mapStateToProps)(App);

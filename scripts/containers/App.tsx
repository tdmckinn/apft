/// <reference path="../../typings/react/react.d.ts" />
/// <reference path="../../typings/react-redux/react-redux.d.ts" />

import * as React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Header from '../components/Header';
import MainSection from '../components/MainSection';
import * as ApftActions from '../actions/index';

interface Props {
  apft: Function,
  dispatch: Function
}

class App extends React.Component<Props, any> {
 
  render() {
    const { apft, dispatch } = this.props;

    return (
    <div>
      <Header />
      <MainSection events={apft} />
    </div>
    );
  }
}

function mapStateToProps(state: any): Object {

  const { apft } = state;

  return {
    apft
  };
}


export default connect(mapStateToProps)(App);
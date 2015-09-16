/// <reference path="../../typings/react/react.d.ts" />
/// <reference path="../../typings/react-redux/react-redux.d.ts" />

import * as React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Header from '../components/Header';
import MainSection from '../components/MainSection';
import * as ApftActions from '../actions/index';

interface Props {
  apft: Object,
  dispatch: Function
}

class App extends React.Component<Props, any> {

  constructor(props) {
    super(props)
  }

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

  const { apft, dispatch } = state

  return {
    apft,
    dispatch
  };
}


export default connect(mapStateToProps)(App);
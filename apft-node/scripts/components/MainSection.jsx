
import React, { Component, PropTypes } from 'react';
import ApftCalculator from './ApftCalculator';

export default class MainSection extends Component {
  constructor(props) {
    super(props)
  }

  render() {

    const { apft, dispatch } = this.props;

    return (
      <div>
        <ApftCalculator apft={apft} dispatch={dispatch} />
      </div>
    )
  }
}

/// <reference path="../../typings/react/react.d.ts" />
/// <reference path="../interfaces/index" />

import * as React from 'react';
import ApftCalculator from './ApftCalculator'
import PT from '../interfaces/index'

interface Props {
  apft: PT.ApftEvents,
  dispatch: Function
}

export default class MainSection extends React.Component<Props, any> {
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
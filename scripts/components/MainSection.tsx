/// <reference path="../../typings/react/react.d.ts" />

import * as React from 'react';
import ApftCalculator from './ApftCalculator'

interface Props {
  apft: Object,
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
        <div>Im the main body</div>
      </div>
    )
  }
}
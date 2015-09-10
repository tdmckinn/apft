/// <reference path="../../typings/react/react.d.ts" />

import * as React from 'react';
import ApftCalculator from './ApftCalculator'

interface Props {
  events: Object
}

export default class MainSection extends React.Component<Props, any> {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <ApftCalculator foo="temple"/>
        <div>Im the main body</div>
      </div>
    )
  }
}
/// <reference path="../../typings/react/react.d.ts" />

import * as React from 'react';

enum Sex {
  Male,
  Female
}

interface Props {
  foo: string;
}

interface State {
  glue: string;
}

class Apft extends React.Component<Props, State> {
  constructor(props) {
    super(props)
  }
}

class ArmyApftCalculator extends Apft {
  constructor(props) {
    super(props)
  }

  render() {
    return <span>{this.props.foo}</span>
  }
}

export default ArmyApftCalculator;
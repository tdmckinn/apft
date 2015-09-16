/// <reference path="../../typings/react/react.d.ts" />

import * as React from 'react';

enum Gender {
  Male,
  Female
}

interface Props {
  apft: Object,
  dispatch: Function
}

class Apft extends React.Component<Props, any> {
  constructor(props) {
    super(props)
  }
}

class ArmyApftCalculator extends Apft {
  constructor(props) {
    super(props)
  }

  componentDidMount() {

  }

  render() {

    //selected = "selected"
    const { apft, dispatch } = this.props
     
    return (
      <div className="ui card" style={{marginLeft: '15'}}>
        <div className="content">
          <div className="header">Army APFT</div>
        </div>
        <div className="content">
          <h4 className="ui sub header">Infromation</h4>  
          <form className="ui form">
            <div className="field">
              <label>Gender</label>
              <input name="gender" placeholder="gender..." type="text" />
            </div>
            <div className="field">
              <label>Age</label>
              <input name="age" placeholder="age..." type="text" />
            </div>
            <div className="field">
              <label>Push-Ups</label>
              <input name="pushups" placeholder="push ups..." type="text" />
            </div> 
            <div className="field">
              <label>Sit-Ups</label>
              <input name="situps" placeholder="sit ups..." type="text" />
            </div>
            <div className="field">
              <label>2 Mile Run</label>
              <input name="2milerun" placeholder="2 mile run..." type="text" />
            </div> 
          </form>
        </div>
        <div className="extra content">
          <button className="ui button">Calculate</button>
        </div>
      </div>
      )
  }
}

export default ArmyApftCalculator;
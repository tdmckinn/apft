/// <reference path="../../typings/react/react.d.ts" />

import * as React from 'react';
import { calculatePtScore } from '../actions/index';

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
      <div>
        <div className="ui pointing menu">
          <a className="item">
            Home
            </a>
          <a className="item">
            Army
            </a>
          <a className="item active">
            Airforce
            </a>
          <a className="item active">
            Navy
            </a>
          <a className="item active">
            Marines
          </a>
          <div className="right menu">
            <div className="item">
              <div className="ui transparent icon input">
                <input placeholder="Search..." type="text"/>
                <i className="search link icon"></i>
                </div>
              </div>
            </div>
          </div>
        <div className="ui segment">
          <div className="ui card apft-card-container" style={{ marginLeft: '15', width: '50%' }}>
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
              <button className="ui button" onClick={() => dispatch(calculatePtScore()) }>Calculate</button>
              </div>
            </div>
          </div>
    </div>
      )
  }
}

export default ArmyApftCalculator;
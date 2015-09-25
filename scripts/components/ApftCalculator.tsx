/// <reference path="../../typings/react/react.d.ts" />
/// <reference path="../../typings/classnames/classnames.d.ts" />

import * as React from 'react';
import { calcApftRequest  } from '../actions/index';
import FitnessTable from './Tables'
import PT from '../interfaces/index'

enum Gender {
  Male,
  Female
}

interface ApftEvents {
  run?: number;
  pushups?: number;
  situps?: number;
  pullups?: number;
  age: number;
  gender: number;
  branch: string
}

interface Props {
  apft: PT.ApftEvents,
  dispatch: Function
}

class Apft extends React.Component<Props, any> {
  branches: Array<String>;

  constructor(props) {
    super(props)

    this.branches = ['Army', 'Airforce', 'Navy', 'Marines']
  }

  componentDidMount() {

  }

  render() {
     
    const { apft, dispatch } = this.props
    
    return (
      <div>
        <div className="ui pointing menu">
          <a className="item">
            Home
            </a>
          {this.branches.map((branch, index) => {
            return <a key={index} className={ apft.branch === branch ? 'item active' : 'item'}>{ branch }</a>
          })
          }
          <div className="right menu">
            <div className="item">
              <div className="ui transparent icon input">
                <input placeholder="Search..." type="text"/>
                <i className="search link icon"></i>
                </div>
              </div>
            </div>
          </div>
        <div className="ui">
          <div className="ui card apft-card-container" style={{ marginLeft: '15', marginRight: '10',  float:'left' }}>
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
            <div className="extra content" style={{ textAlign: 'center' }}>
              <button className="ui button" onClick={() => dispatch(calcApftRequest(apft)) }>Calculate</button>
              <div className="ui left pointing label">
                {apft.scoreTotal}
               </div>
            </div>

          </div>
        <FitnessTable  apft={apft} dispatch={dispatch} />

        </div>
      </div>
    )
  }
}

export default Apft;
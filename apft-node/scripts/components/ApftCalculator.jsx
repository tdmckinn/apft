
import React, { Component, PropTypes } from 'react';
import { calcApftRequest  } from '../actions/index';
import FitnessTable from './Tables';


class Apft extends Component {

  constructor(props) {
    super(props)

    this.branches = ['Army', 'Airforce', 'Navy', 'Marines'];
  }

  componentDidMount() {

  }

  render() {
     
    const { apft, dispatch } = this.props
    const apftContainer = { 
      marginLeft: '15', 
      marginRight: '10',  
      float:'left'
    }
    
    const classLabel = 'apft-card__label';
    const classInput = 'apft-card__input';
    
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
          <div className="ui card apft-card-container" style={apftContainer}>
            <div className="content">
              <div className="header">Army APFT</div>
              </div>
            <div className="content">
              <h4 className="ui sub header">Infromation</h4>
              <form className="ui form apft-card-form">
                <div className="field">
                  <label className={classLabel}>Gender</label>
                  <input className={classInput} name="gender" placeholder="gender..." type="text" />
                  </div>
                <div className="field">
                  <label className={classLabel}>Age</label>
                  <input className={classInput} name="age" placeholder="age..." type="text" />
                  </div>
                <div className="field">
                  <label className={classLabel}>Push-Ups</label>
                  <input className={classInput} name="pushups" placeholder="push ups..." type="text" />
                  </div>
                <div className="field">
                  <label className={classLabel}>Sit-Ups</label>
                  <input className={classInput} name="situps" placeholder="sit ups..." type="text" />
                  </div>
                <div className="field">
                  <label className={classLabel}>2 Mile Run</label>
                  <input className={classInput} name="2milerun" placeholder="2 mile run..." type="text" />
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

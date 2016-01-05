
import React, { Component, PropTypes } from 'react';

class ApftForm extends Component {

  constructor(props) {
    super(props)
  }

  render() {

    const apftContainer = {
      marginLeft: '15',
      marginRight: '10',
      float:'left'
    }

    const { apft, dispatch } = this.props;
    const { run, pushups, situps, age, gender, branch } = apft;
    const classLabel = 'apft-card__label';
    const classInput = 'apft-card__input';

    return (
      <div className="ui">
        <div className="ui card apft-card-container" style={apftContainer}>
          <div className="content">
            <div className="header">{branch} APFT </div>
          </div>
          <div className="content">
            <h4 className="ui sub header">Infromation </h4>
            <form className="ui form apft-card-form">
              <div className="field">
                <label className={classLabel}>Gender </label>
                <input className={classInput} name="gender" placeholder="gender..." type="text" value={gender} />
                </div>
              <div className="field">
                <label className={classLabel}>Age </label>
                <input className={classInput} name="age" placeholder="age..." type="text" value={age || ''} />
                </div>
              <div className="field">
                <label className={classLabel}>Push-Ups </label>
                <input className={classInput} name="pushups" placeholder="push ups..." type="text" value={pushups || ''} />
                </div>
              <div className="field">
                <label className={classLabel}>Sit-Ups </label>
                <input className={classInput} name="situps" placeholder="sit ups..." type="text" value={situps || ''} />
                </div>
              <div className="field">
                <label className={classLabel}>2 Mile Run </label>
                <input className={classInput} name="2milerun" placeholder="2 mile run..." type="text" value={run || ''}/>
              </div>
            </form>
          </div>
          <div className="extra content" style={{ textAlign: 'center' }}>
            <button className="ui button" onClick={() => dispatch(calcApftRequest(apft)) }>Calculate </button>
            <div className="ui left pointing label">
              {apft.scoreTotal}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ApftForm;


/// <reference path="../../typings/react/react.d.ts" /> 

import * as React from 'react';
import PT from '../interfaces/index';

interface Props {
  apft: PT.ApftEvents,
  dispatch: Function
}

class FitnessTable extends React.Component<Props, any> { 

  constructor(props) {
    super(props) 
  }

  componentDidMount() {

  }

  render() {

    const { apft, dispatch } = this.props

    let isCsvDataAvailablePushups = apft.pushupsCsv ? true : false 

    return (
      <div className="ui raised very padded text container segment" style={{ float: 'right', width: '73%', marginTop: '0px' }}>
        <h2 className="ui header">The Army Physical Fitness Test (APFT) Standards</h2>  
        <table className="ui celled table">
          <thead>
            <tr>
              {isCsvDataAvailablePushups ? apft.pushupsCsv.data[1].map(x => <th>{x}</th>) : '' }  
            </tr>
          </thead>
          <tbody> 
           { isCsvDataAvailablePushups ? apft.pushupsCsv.data.map((row, index) => {
              <tr key={index}>
                {row.map(x => <td>{x}</td>) }
               </tr>
           }) : '' }
          </tbody> 
        </table> 
      </div>
    )
  }

}

export default FitnessTable;
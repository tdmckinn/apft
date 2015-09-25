
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
    let style: any = {
      float: 'left',
      width: '73%',
      marginTop: '0',
      boxSizing: 'content-box',
      marginRight: '10'
    }

    return (
      <div className="ui raised padded text container segment" style={style}>
        <h2 className="ui header">The Army Physical Fitness Test (APFT) Standards - Pushups</h2>  
        <table className="ui celled table">
          <thead>
            <tr>
              {isCsvDataAvailablePushups ? apft.pushupsCsv.data[1].map(x => <th>{x}</th>) : '' }  
            </tr>
          </thead>
          <tbody> 
           { isCsvDataAvailablePushups ? apft.pushupsCsv.data.map((row, index) => {
              return <tr key={index}>
                {row.map((x, rindex) => { 
                  // don't want to display the header info row twice
                  if (index !== 0 && index !== 1) {
                    return <td key={rindex}>{x}</td>
                  }
                })
               }
              </tr>
           }) : '' }
          </tbody> 
        </table> 
      </div>
    )
  }

}

export default FitnessTable;
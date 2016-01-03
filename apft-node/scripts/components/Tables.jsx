
import React, { Component, PropTypes } from 'react';

class FitnessTable extends Component { 

  constructor(props) {
    super(props) 
  }

  componentDidMount() {

  }

  render() {

    const { apft, dispatch } = this.props

    let isCsvDataAvailablePushups = apft.pushupsCsv ? true : false
    
    let style = {
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
              {isCsvDataAvailablePushups ? apft.pushupsCsv.data[1].map((x, index) => {
                return <th key={index}>{x}</th>
              }) : '' }  
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

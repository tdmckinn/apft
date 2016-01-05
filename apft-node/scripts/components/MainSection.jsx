
import React, { Component, PropTypes } from 'react';
import { calcApftRequest  } from '../actions/index';
import FitnessTable from './Tables';
import ApftForm from './ApftForm';

const MainSection = (props) => {

  const { apft, dispatch } = props;

  return (
    <div>
      <ApftForm apft={apft} dispatch={dispatch} />
      <FitnessTable apft={apft} dispatch={dispatch} />
    </div>
  )
}

export default MainSection;

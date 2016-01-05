
import React, { Component, PropTypes } from 'react';

const branches = ['Army', 'Airforce', 'Navy', 'Marines'];

const Header = (props) => {

  const { apft, onClick } = props;

  return (
    <div className="ui pointing menu">
      <a className="item"> Home </a>
      {branches.map((branch, index) => {
        return <a key={index} className={ apft.branch === branch ? 'item active' : 'item'} onClick={e => onClick(e)}>{ branch }</a>
      })
      }
      <div className="right menu">
        <div className="item">
          <div className="ui transparent icon input">
            <input placeholder="Search..." type="text"/><i className="search link icon"></i>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header;

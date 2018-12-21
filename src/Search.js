import React, { Component } from 'react';


export default class Search extends Component {
  render(){
    const {value, onChange, children} = this.props;
    return (
      <form>
        {children}<input type="text" onChange={onChange} value={value}/>
      </form>
    );
  }
}
import React, { Component } from 'react';

export default class ExplainBindingComponent extends Component {
  constructor(props){
    super(props);

    //this.onClickMe = this.onClickMe.bind(this);
  }//End constructor

  onClickMe = () => {
    console.log(this);
  }



  render(){
    return (
      <button onClick={this.onClickMe} type="button">Click Me</button>
    );
  }
}

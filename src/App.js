import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ExplainBindingComponent from './ExplainBindingComponent';
import Search from './Search';
import Table from './Table';


const list = [
  {
    title: "React",
    url: 'https://facebook.github.io/react/',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {title: 'Redux',
  url: 'https://github.com/reactjs/redux',
  author: 'Dan Abramov, Andrew Clark',
  num_comments: 2,
  points: 5,
  objectID: 1,
  }
];

const name ="Alejandro";

class App extends Component {

  constructor(props){
    //super();Works not compiling error
    super(props);//mandatory

    this.state = {
      list,
      name, //this is the shorthand initialize when the name of the property match the variable
      searchTerm: '',
    };

    this.onDismiss = this.onDismiss.bind(this);
    this.onSearchChange = this.onSearchChange.bind(this);
  }//End constructor



  onDismiss(id){
    const isNotId = item =>  item.objectID !== id;

    const updatedList = this.state.list.filter(isNotId);
    this.setState({list: updatedList});
  }//end onDismiss

  onSearchChange(event){
    console.log("Value new: " + event.target.value);
    this.setState({searchTerm: event.target.value});
  }// end onSearchChange

  render() {
    /** Not used anymore
    const phrase ="Welcome to my second react project using create-react-app!";
    const user = {
      name: "diego Alejandro",
      lastname: "salgado"
    }; */
    const {searchTerm, list} = this.state;
    return (
      <div className="page">
      <div className="interactions">
      <Search value={searchTerm} onChange={this.onSearchChange}>
      Search:
      </Search>
      </div>
      <Table list={list} pattern={searchTerm} onDismiss={this.onDismiss} />
        <h1>{this.state.name} </h1>

        <ExplainBindingComponent />
      </div>
    );
  }
}

export default App;

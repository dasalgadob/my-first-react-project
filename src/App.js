import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


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
    };

    this.onDismiss = this.onDismiss.bind(this);
  }//End constructor



  onDismiss(id){
    function isNotId(item){
      return item.objectID !== id;
    }

    const updatedList = this.state.list.filter(isNotId);
    this.setState({list: updatedList});
  }//end onDismiss

  render() {
    /** Not used anymore
    const phrase ="Welcome to my second react project using create-react-app!";
    const user = {
      name: "diego Alejandro",
      lastname: "salgado"
    }; */
    return (
      <div className="App">
        {this.state.list.map( item =>
          <div key={item.objectID}>
            <span><a href={item.url}>{item.title}</a></span>
            <span> {item.author}</span>
            <span> {item.num_comments} </span>
            <span>
              <button onClick={() => this.onDismiss(item.objectID)}
              type="button">
                Dismiss
              </button>
            </span>
          </div>
        )

        }
        <h1>{this.state.name} </h1>
      </div>
    );
  }
}

export default App;

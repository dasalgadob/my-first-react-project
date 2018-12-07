import React, { Component } from 'react';

import './App.css';
import PropTypes from 'prop-types';

class Clase extends Component {

  constructor(props){
      super(props);

      this.state= {
          number: 1,
          text: "Activo"
      }
  }

  render() {
    const phrase ="Welcome to my first react project using create-react-app!";
    const user = {
      name: "diego",
      lastname: "salgado"
    };

    return (
      <div className="Clase">
      <h2>{this.props.title}</h2>
      <form>
          <div className="form-group">
            <label>Numero:</label>
            <input type="number" className="form-control" value={this.state.number}/>
          </div>

          <div className="form-group">
            <label>Nombre:</label>
            <input type="text" className="form-control" value={this.state.text}/>
          </div>

          <div className="form-group">
            <button id="submit" type="submit" className="btn btn-success">{this.props.title}</button>
          </div>
      </form>
      </div>
    );
  }
}

Clase.defaultProps = { title: "Crear"};
Clase.propTypes = {
    title: PropTypes.string.isRequired
};
export default Clase;

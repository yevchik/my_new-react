import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';

class Summary extends Component {
    //static дозволяє задавать стен в середині класу а не зовні я defaultProps наприклад
  static   propTypes = {
      ingredients: PropTypes.string,
      steps: PropTypes.string,
      title: (props, propName) =>
            (typeof props[propName] !== 'string') ?
        new Error("A title must be a string") :
            (props[propName].length > 20) ?
        new Error(`title is over 20 characters`) :
    null
  }
 
  render() {
        const {ingredients, steps, title} = this.props
    return (
      <div className="Summary">
        <h1>{title}</h1>
            <p>
                <span>{ingredients} <br/> - ingredients</span>
        <br/>
                <span>{steps}<br/> 
                    - steps</span>
            </p>
      </div>
    );
  }
}



Summary.defaultProps = {
    steps: "nema"
}



export default Summary;

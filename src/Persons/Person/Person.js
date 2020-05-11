import React, { Component } from 'react';
import propTypes from 'prop-type';
import Auxiliary from '../../hoc/Auxiliary';
import withClass from '../../hoc/withClass';
import classes from './Person.css';
import AuthContext from '../../context/auth-context';

class Person extends Component {
  constructor(props) {
    super(props);
    this.inputElement = React.createRef();
  }
  static contextType = AuthContext;
  componentDidMount(){
    // this.inputElement.focus()
    // this.inputElementRef.current.focus();
    console.log(this.context.authenticated);
  }
  render() {
    console.log('[Person.js] rendering...');
    return (
      <Auxiliary>
        <AuthContext.Consumer>
         {(context) => context.authenticated? <p>Authenticated!</p> : <p>Please log in!</p>} 
        </AuthContext.Consumer>
        <p onClick={this.props.click}>
          I'm {this.props.name} and I am {this.props.age} years old!
        </p>
        <p key="i2">{this.props.children}</p>
        <input
          key="i3"
          // ref= {(inputEl)=>{this.inputElement = inputEl}}
          ref = {this.inputElementRef}
          type="text"
          onChange={this.props.changed}
          value={this.props.name}
        />
      </Auxiliary>
    );
  }
}
Person.propTypes = {
  click: propTypes.func,
  name: propTypes.toString,
  age: propTypes.number,
  changed: propTypes.func
};
export default withClass(Person, classes.Person);

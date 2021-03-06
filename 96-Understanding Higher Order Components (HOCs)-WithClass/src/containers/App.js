import React, { PureComponent } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import WithClass from '../hoc/WithClass';

class App extends PureComponent {

    constructor(props) {
      super(props);
      console.log('[App.js] Inside Constructor',  props);
      this.state = {
        persons: [
          { id: 'asfa1', name: 'Max', age: 28 },
          { id: 'vasdf1', name: 'Manu', age: 29 },
          { id: 'asdf11', name: 'Stephanie', age: 26 }
        ],
        otherState: 'some other value',
        showPersons: false
      };
    }

    componentWillMount() {
      console.log('[App.js] Inside component willmont');
    }

    componentDidMount() {
      console.log('[App.js] Inside componentDidMount');
    }
  
    //Update happen through internal Triggers
    //shouldComponentUpdate(nextProps, nextState) {
    // console.log('[UPDATE App.js] Inside shouldComponentUpdate', nextProps, nextState);
      //return true; // return true or false on some condition.
    //  return nextState.persons !== this.state.persons ||
    //  nextState.showPersons !== this.showPersons;
    //}

    componentWillUpdate(nextProps, nextState) {
      console.log('[UPDATE App.js] Inside componentWillUpdate', nextProps, nextState);
    }

    componentDidUpdate () {
      console.log('[UPDATE App.js] Inside componentDidUpdate');
    }

  //state = {
   // persons: [
  //    { id: 'asfa1', name: 'Max', age: 28 },
   //   { id: 'vasdf1', name: 'Manu', age: 29 },
   //   { id: 'asdf11', name: 'Stephanie', age: 26 }
   // ],
   // otherState: 'some other value',
   // showPersons: false
//}

  nameChangedHandler = ( event, id ) => {
    const personIndex = this.state.persons.findIndex( p => {
      return p.id === id;
    } );

    const person = {
      ...this.state.persons[personIndex]
    };

    // const person = Object.assign({}, this.state.persons[personIndex]);

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState( { persons: persons } );
  }

  deletePersonHandler = ( personIndex ) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice( personIndex, 1 );
    this.setState( { persons: persons } );
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState( { showPersons: !doesShow } );
  }

  render () {
    console.log("App.js Inside render()");
    let persons = null;
    if ( this.state.showPersons ) {
      persons = 
          <Persons persons={this.state.persons} 
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler}/>

      //btnClass = classes.Red;
    }

    return (
      //HOC <WithClass> Higher order Component
      <WithClass classes={classes.App}> 
      <button onClick={() => {this.setState({showPersons: true})}}>Show Persons</button>
        <Cockpit
        appTitle ={this.props.title} 
        showPersons={this.state.showPersons}
        persons={this.state.persons}
        clicked={this.togglePersonsHandler}/>
          {persons}
        </WithClass>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;

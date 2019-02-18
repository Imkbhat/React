import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons : [
      { id : 'abc', name : '1', age: 28 },
      { id : 'def', name : '2', age: 29},
      { id : 'ghi', name : '3', age: 29}
    ],
    otherState : 'some other value',
    showPersons : false
  }

nameChangeHandler = (event, id) => {
  const personIndex = this.state.persons.findIndex(p => {
    return p.id === id;
  });

  const person = {
    ...this.state.persons[personIndex]
    }

    //const person = Object.assign({}, this.state.persons[personIndex]);//can be used this aswell

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

  this.setState({persons: persons});//without mutating the state
}

togglePersonHandler = () => {
  const doesShow = this.state.showPersons;
  this.setState({showPersons: !doesShow});
}

deletePersonHandler = (personIndex) => {
  //const persons = this.state.persons;//copy of original  array
  const persons = [...this.state.persons];// copy of persons as new const variable(Immutable  approcah)
  persons.splice(personIndex, 1);//mutate original data
  this.setState({persons : persons})
}

  render() {
    const style = {
      backgroundColor: 'green',
      color:'white',
      font: 'inherit',
      border: '1x solid Brown',
      padding:  '8px',
      cusrsor: 'pointer'
    };

    let persons =  null;
    
    if(this.state.showPersons) {
        persons = (
          <div >
            {this.state.persons.map((person, index) => {
             return <Person 
                click={() => this.deletePersonHandler(index)}
                name={person.name}
                age={person.age}
                key={person.id}
                changed={(event) => this.nameChangeHandler(event, person.id)}/>
            })}
        </div>
        );
        style.backgroundColor = 'red';
    }

    //let classes = ['red', 'bold'].join(' ');
    let classes = [];
    if(this.state.persons.length <= 2) {
      classes.push('red');//classess is red
    }

    if(this.state.persons.length <= 1) {
      classes .push('bold');//classes is red and bold
    }


    return (
      <div className="App">
        <h1>Hi, Im a React App</h1>
        <p className={classes.join(' ')}>Working</p>
        <button style={style} 
              onClick={this.togglePersonHandler}>Toggle Persons</button>
                {persons}
      </div>
    );
   //return React.createElement('div', {className:'App'},  React.createElement('h1', null, 'I am react app!!!', ''))
  }
}

export default App;

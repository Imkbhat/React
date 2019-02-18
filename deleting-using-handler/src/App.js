import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons : [
      { name : '1', age: 28 },
      { name : '2', age: 29},
      { name : '3', age: 29}
    ],
    otherState : 'some other value',
    showPersons : false
  }

nameChangeHandler = (event) => {
  this.setState({ 
    persons : [
      { name: '6', age:28 },
      { name : event.target.value, age: 120 },
      { name : '7', age: 29}
  ] 
  })
}

togglePersonHandler = () => {
  const doesShow = this.state.showPersons;
  this.setState({showPersons: !doesShow});
}

deletePersonHandler = (personIndex) => {
  const persons = this.state.persons;
  persons.splice(personIndex, 1);
  this.setState({persons : persons})
}

  render() {
    const style = {
      backgroundColor: 'Yellow',
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
                age={person.age}/>
            })}
        </div>
        );
    }


    return (
      <div className="App">
        <h1>Hi, Im a React App</h1>
        <p>Working</p>
        <button style={style} 
              onClick={this.togglePersonHandler}>Toggle Persons</button>
                {persons}
      </div>
    );
   //return React.createElement('div', {className:'App'},  React.createElement('h1', null, 'I am react app!!!', ''))
  }
}

export default App;

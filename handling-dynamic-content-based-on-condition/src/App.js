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

  switchNameHandler = (newName) => {
  //  console.log('Was clicked !');
  // Dont do this.state.persons[0].name='Kiran Bhat';
  this.setState({ persons : [
    { name: newName, age:28 },
    { name : '4', age: 100 },
    { name : '5', age: 29}
  ] 
  })
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
          <Person name={this.state.persons[0].name} 
                  age={this.state.persons[0].age} />
          <Person name={this.state.persons[1].name} 
                  age={this.state.persons[1].age}
                  click={this.switchNameHandler.bind(this,'Kiran Bhat')}
                  changed={this.nameChangeHandler} />
          <Person name={this.state.persons[2].name} 
                  age={this.state.persons[2].age} />
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

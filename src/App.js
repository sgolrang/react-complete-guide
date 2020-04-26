import React, {Component, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Person from "./Person/Person";
import person from "./Person/Person";
// import App from "react-scripts/template/src/App";

class App extends Component {
    state = {
        persons: [
            {id: '123', name: 'sana', age: 28},
            {id: '1234', name: 'Samira', age: 40},
            {id: '12345', name: 'sam', age: 37}
        ],
        otherState: 'some other value',
        showPersons: false
    }
    switchNameHandler = (newName) =>{
        this.setState({
            persons:[
                {name: newName , age: 28},
                {name: 'manu', age: 29},
                {name: 'Stephenie', age: 27}

            ]
        })
    }
    nameChangedHandler = (event, id) => {
        const personIndex = this.state.persons.findIndex(p =>{
        return p.id == id;

        });
        const person = {
             ...this.state.persons[personIndex]
        }
        this.setState({
            persons: [
                {name: 'Max', age: 28},
                {name: event.target.value, age: 29},
                {name: 'Stephenie', age: 26},

            ]

        })
    }

    deletePersonHandler= (personIndex) => {
        const persons = [...this.state.persons];
        persons.splice(personIndex, 1);
        this.setState({persons: persons})
    }
    togglePersonHandler= () =>{
        const doesShow = this.state.showPersons;
        this.setState({showPersons: !doesShow})
    }
    render() {
        const style = {
            backgroundColor: 'white',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer',
        };
        let persons = null;
        if(this.state.showPersons){
            persons = (
                <div>
                    {this.state.persons.map((person, index) =>{
                        return <Person
                            click = {this.deletePersonHandler(index)}
                            name = {person.name}
                            age={person.age}
                            key = {person.id}
                            changed={(event)=> this.nameChangedHandler(event, person.id)} />
                    })}
                
                </div>
            );
        }
        style.backgroundColor = 'red'
        let classes = ['red','bold'].join(' ');
        return (
            <div className="App">
                <h1>Hi Sana,  I'm a React App</h1>
                <p className={classes}>This is really working!</p>
                <button
                style={style}
                onclick={this.togglePersonHandler}>Toggle Persons</button>
                {persons}
            </div>
        );

    }
}

export default App;

    // {/*<Person*/}
    //                 {/*    name={this.state.persons[0].name}*/}
    //                 {/*    age={this.state.persons[0].age}/>*/}
    //                 {/*<Person*/}
    //                 {/*    name={this.state.persons[1].name}*/}
    //                 {/*    age={this.state.persons[1].age}*/}
    //                 {/*    click={this.nameChangedHandler.bind(this, 'Max!')}*/}
    //                 {/*    changed = {this.nameChangedHandler}>My hobbies: Racing</Person>*/}
    //                 {/*<Person*/}
    //                 {/*    name={this.state.persons[2].name}*/}
    //                 {/*    age={this.state.persons[2].age}/>*/}
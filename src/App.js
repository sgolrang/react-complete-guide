import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Person from "./Person/Person";

const app = props => {
    const [personState, setPersonsState] = useState({
        persons: [
            {name: 'sana', age: 28},
            {name: 'Samira', age: 40},
            {name: 'sam', age: 37}
        ],
    });
    const [otherState, setOtherState] = useState('some other value');
    console.log(personState, otherState);
    useState('some other value');
    const switchNameHandler = () => {
        // this.state.persons[0].name= 'maximilian'
        // console.log('was clicked!');
        setPersonsState({
            persons: [
                {name: 'Sana G', age: 28},
                {name: 'Samira G', age: 40},
                {name: 'Saleh G', age: 37}
            ]
        })
    }
    return (
        <div className="App">
            <h1>Hi Sana, I'm a React App</h1>
            <button onClick={switchNameHandler}>Switch Name</button>
            <Person name={personState.persons[0].name} age={personState.persons[0].age}/>
            <Person name={personState.persons[1].name} age={personState.persons[1].age}/>
            <Person name={personState.persons[2].name} age={personState.persons[2].age}/>
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <h1 className="App-title">Welcome to React</h1>
            </header>
            <p className="App-intro">
                To get started, edit <code>src/App.js</code> and save to reload.
            </p>
        </div>
    );
}
export default app;


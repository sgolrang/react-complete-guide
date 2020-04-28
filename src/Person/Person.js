import React from 'react';
// import './Person.css';
import styled from 'styled-components';
const StyleDiv =  styled.div`
width: 60%;
margin: auto;
border: 1px solid #eeeeee;
box-shadow: 0 2px 3px #cccccc;
padding: 16px;
text-align: center;

@media(min-width: 500px){
.Person{
    width: 450px;
}
}`;
const person = (props) => {
    const style = {
       '@media (min-width: 500px)': {
           width: '450px'
       } 
    };
    return(
       
        <div className="Person" style={style}>
            <p>onClick= {props.click}I'm {props.name}, {props.age}</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.change} value={props.name} />
        </div>
)};
export default person;
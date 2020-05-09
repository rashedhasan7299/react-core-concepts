import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  // var person = {
  //   name: "Steve Smith",
  //   age: 35,
  //   email: "steveSmith@gmail.com"
  // }

  // var person2 = {
  //   name: "Will Smith",
  //   age: 35,
  //   email: "steveSmith@gmail.com"
  // }

  // var whiteBg = {
  //   backgroundColor : "white",
  //   color : "grey",
  //   padding : "30px",
  //   marginBottom : "20px"
  // }
  return (
    <div className="App">
      <header className="App-header">
        <Person></Person>
        <Person></Person>
        <Person></Person>
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        
        {/* <h4 style={whiteBg}>{ `Name: ${person.name}
        Email: ${person.email}
        Age: ${person.age}` }</h4> */}

        {/* <h4 style = {{backgroundColor : "black"}}>{ `Name: ${person2.name}
        Email: ${person2.email}
        Age: ${person2.age}` }</h4> */}
        
        {/* <p>Paragraph done in React</p> */}
      </header>
    </div>
  );
}

function Person() {

  const personStyle = {
    backgroundColor : "white",
    color : "#333",
    padding : "20px",
    marginBottom : "10px",
    border: "1px solid darkGrey"
  }

  const buttonStyle = {
    padding : "15px",
    backgroundColor : "#333",
    color : "#fff",
    border : "none",
    borderRadius : "5px",
    fontWeight : "400",
    fontSize : "1rem"
  }

  function clickHandle (e) {
    e.preventDefault();
    alert("Yes, it is true!");
  }
  return(
    <div style = {personStyle}>
      <h1>Sakib Al Hasan</h1>
      <button style = {buttonStyle} onClick = {clickHandle}>Best all rounder in the world</button>
    </div>
  )
}

export default App;

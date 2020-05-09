import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const products = [
    {
      name: "Photoshop",
      description : "Lorem ipsum dolor sit amet.",
      price : "$199"
    },
    {
      name: "Illustrator",
      description : "Lorem ipsum, dolor sit amet consectetur adipisicing.",
      price : "$149"
    },
    {
      name: "Lightroom",
      description : "Lorem ipsum, dolor.",
      price : "$99"
    },
    {
      name: "Indesign",
      description : "Lorem ipsum, dolor.",
      price : "$119"
    },
    {
      name: "Premiere Pro",
      description : "Lorem ipsum, dolor.",
      price : "$139"
    }
  ]

  const productNames = products.map( product => product.name );
  console.log(productNames);
  return (
    <div className="App">
      <header className="App-header">
        <ul>
        {
          productNames.map(product => <li>{product}</li>)
        }
        </ul>
        {
          products.map( product => <Product product = {product} ></Product>)
        }
        {/* <img src={logo} className="App-logo" alt="logo" />
        
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

function Product (props) {

const productsStyle = {
  backgroundColor : "#fff",
  color : "#111",
  padding : "10px",
  width : "600px",
  borderRadius : "10px",
  marginBottom : "10px"
}
  return(
    <div style = {productsStyle}>
      <h6>Name: </h6>
      <h3>{props.product.name}</h3>
      <h5>Description: </h5>
      <p>{props.product.description}</p>
      <h4>Price: </h4>
      <h3>{props.product.price}</h3>
      <button>Buy Now</button>

    </div>
  )
}

// function Person(props) {

//   const personStyle = {
//     backgroundColor : "white",
//     color : "#333",
//     padding : "20px",
//     marginBottom : "10px",
//     border: "1px solid darkGrey",
//     width : "500px"
//   }

//   const buttonStyle = {
//     padding : "15px",
//     backgroundColor : "#333",
//     color : "#fff",
//     border : "none",
//     borderRadius : "5px",
//     fontWeight : "400",
//     fontSize : "1rem"
//   }

//   function clickHandle (e) {
//     e.preventDefault();
//     alert("Yes, it is true!");
//   }
//   return(
//     <div style = {personStyle}>
//       <h1>Name: {props.name}</h1>
//       <h3>Age: {props.age}</h3>
//       <button style = {buttonStyle} onClick = {clickHandle}>Best all rounder in the world</button>
//     </div>
//   )
// }



export default App;

import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
// import DogRoutes from './DogRoutes';
import Nav from './Nav';
import ColorList from './ColorList';
import Color from './Color';
import ColorRoutes from './ColorRoutes';



function App(props) {
  let colors = props.colors;
  let dogs = props.dogs;
  
  return (
    <div className="App">
      <BrowserRouter>
        {/* <Nav dogs={dogs}/>
        <DogRoutes dogs={dogs}/>         */}
        <ColorRoutes colors={colors}/>

        

      </BrowserRouter>

    </div>
  );
}
// App.defaultProps ={
//   colors:
//   [
//     {name:"red"}, 
//     {name:"blue"}, 
//     {name:"purple"}
//   ]

// }


// App.defaultProps = {
//   dogs: [
//     {
//       name: "Whiskey",
//       age: 5,
//       src: "whiskey",
//       facts: [
//         "Whiskey loves eating popcorn.",
//         "Whiskey is a terrible guard dog.",
//         "Whiskey wants to cuddle with you!"
//       ]
//     },
//     {
//       name: "Duke",
//       age: 3,
//       src: "duke",
//       facts: [
//         "Duke believes that ball is life.",
//         "Duke likes snow.",
//         "Duke enjoys pawing other dogs."
//       ]
//     },
//     {
//       name: "Perry",
//       age: 4,
//       src: "perry",
//       facts: [
//         "Perry loves all humans.",
//         "Perry demolishes all snacks.",
//         "Perry hates the rain."
//       ]
//     },
//     {
//       name: "Tubby",
//       age: 4,
//       src: "tubby",
//       facts: [
//         "Tubby is really stupid.",
//         "Tubby does not like walks.",
//         "Angelina used to hate Tubby, but claims not to anymore."
//       ]
//     }
//   ]
// }

export default App;

import "./App.css";
import { useState } from 'react';

// toggle color using state and ternary operator
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <button onClick={() => {setCount( count + 1 );}}>Increase</button>
      <button onClick={() => {setCount( count - 1 );}}>Decrease</button>
      <button onClick={() => {setCount( 0 );}}>Set to Zero</button>

      <div><h1>{ count }</h1></div>
    </div>
  );
}

export default App;


// // toggle color using state and ternary operator
// function App() {
//   const [textColor, setTextColor] = useState("black");

//   return (
//     <div className="App">
//       <button
//         onClick={() => {
//           setTextColor( textColor === "black" ? "red" : "black");
//       }}
//       >
//         {""}
//          Show/Hide </button>
//       {/* {showText === true && <h1>Hi my Name is Steven</h1>} */}
//       <h1 style={{color: textColor}}>Hi my Name is Steven</h1>
//     </div>
//   );
// }

// export default App;



// // remove === comparison from &&
// // inline anonymous function
// // toggle a boolean variable
// function App() {
//   const [showText, setShowText] = useState(true);

//   return (
//     <div className="App">
//       <button
//         onClick={() => {
//           setShowText(!showText);
//       }}
//       >
//         {""}
//          Show/Hide </button>
//       {/* {showText === true && <h1>Hi my Name is Steven</h1>} */}
//       {showText && <h1>Hi my Name is Steven</h1>}
//     </div>
//   );
// }

// export default App;




// ************  Input Box  ****************
// function App() {
//   const [inputValue, setInputValue] = useState("");

//   const handleInputChange = (event) => {
//     // console.log(event.target.value);
//     setInputValue(event.target.value);
//   };

//   return (
//     <div className="App">
//       <input type="text" onChange={handleInputChange} />
//         <div>{inputValue}</div>
//     </div>
//   );
// }

// export default App;





// *************** Button *****************
// function App() {
//   const [age, setAge] = useState(0);

//   const increaseAge = () => {
//     setAge(age + 1)
//   };

//   return (
//     <div className="App">
//       {age}
//       <button onClick={increaseAge}>Increase Age</button>
//     </div>
//   );
// }

// export default App;
import './App.css';

function App() {

  // const age = 19;
  // const isGreen = true;
  const names = ["Fred", "Barney", "Wilma", "Betty", "Pebbles"];


  return (
    <div classname="App">
      <h1>{names[2]}</h1> 
    </div>
  );

  // return (
    // Example 3
    
    


    // Example 1
    // <div className="App">
    //   <User name="Pedro" age={33} email="slmarcus@yahoo.com" />
    //   <User name="Fred" age={333} email="asdf@yahoo.com" />
    //   <User name="Barney" age={44} email="deedd@yahoo.com" />
    // </div>

    // Example 2
    // <div>
    //   {age >= 18 ? <h1>OVER AGE</h1> : <h1>UNDER AGE</h1>}
    //   <h1 style={{ color: isGreen ? "green" : "red" }}>This has a color</h1>
    //   {isGreen && <button>This is a button</button>}
    // </div>
  // );
}


// const User = (props) => {
//   return (
//     <div>
//       <h1>{props.name}</h1>
//       <h1>{props.age}</h1>
//       <h1>{props.email}</h1>
//     </div>
//   );
// };

export default App;

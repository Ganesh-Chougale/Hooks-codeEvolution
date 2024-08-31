import React, { useReducer } from 'react'
import './App.css';
import CompA from './Hooks/RH_Recude_Context/Example01/CompA';
import CompB from './Hooks/RH_Recude_Context/Example01/CompB';
import CompC from './Hooks/RH_Recude_Context/Example01/CompC';

export const COUNT_CONTEXT_APP = React.createContext();

const initialVAl = 0;
const reducer = (state, action)=>{
  switch(action){
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initialVAl;
    default:
      return state;  
  }
}

function App() {

  const [count, dispatch] = useReducer(reducer, initialVAl);

  return (

    <COUNT_CONTEXT_APP.Provider value={{countState: count, countDispatch: dispatch}}>
    <div className="App">
    <h1 style={{width: "100%"}}>count {count}</h1>
    <CompA/>
    <CompB/>
    <CompC/>
    </div>
    </COUNT_CONTEXT_APP.Provider>

  );
}

export default App;

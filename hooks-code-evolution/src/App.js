import React from 'react';
import './App.css';
import ComponentTop from './Hooks/RH_useContext/Approach01/ComponentTop';

export const userContext = React.createContext()
export const cityContext = React.createContext()


function App() {


  return (
    <div className="App">
    <userContext.Provider value={"Ganesh"}>
    <cityContext.Provider value={"Kolhapur"}>
    <ComponentTop/>
    </cityContext.Provider>
    </userContext.Provider>
    </div>
  );
}

export default App;

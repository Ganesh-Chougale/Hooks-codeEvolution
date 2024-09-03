import React from 'react'
import './App.css';
import TitleChanger01 from './Custom_Hook/TitleUpdater/WithCustomHook/TitleChanger01';
import TitleChanger02 from './Custom_Hook/TitleUpdater/WithCustomHook/TitleChanger02';

function App() {
  return (
    <div className='App'>
    <TitleChanger01/>
    <TitleChanger02/>
    </div>
  );
}

export default App;

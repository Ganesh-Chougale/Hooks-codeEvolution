import React, { useState } from 'react'
import useTitlepdater from './Hook/useTitlepdater';

function TitleChanger01() {
    const [count, setCount] = useState(0);

    useTitlepdater(count);

  return (
    <div>
    <button onClick={()=> setCount(prev => prev + 1)}
    >Count {count}</button>  
    </div>
  )
}

export default TitleChanger01

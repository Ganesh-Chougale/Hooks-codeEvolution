### the task is to create 2 button components which will increase the count & count will be render as document.title

- 1. **WithoutCustomHook**
    - TitleChanger01.js
    - TitleChanger02.js

here both component have same code, which we dont want

- **TitleChanger01.js**:
```javascript
import React, { useEffect, useState } from 'react'

function TitleChanger01() {
    const [count, setCount] = useState(0);

    useEffect(()=>{
        document.title = `Title ${count}`
    },[count])

  return (
    <div>
    <button onClick={()=> setCount(prev => prev + 1)}
    >Count {count}</button>  
    </div>
  )
}

export default TitleChanger01
```
- **TitleChanger02.js**:
```javascript
import React, { useEffect, useState } from 'react'

function TitleChanger02() {
    const [count, setCount] = useState(0);

    useEffect(()=>{
        document.title = `Title ${count}`
    },[count])

  return (
    <div>
    <button onClick={()=> setCount(prev => prev + 1)}
    >Count {count}</button>  
    </div>
  )
}

export default TitleChanger02
```

- 2. **WithCustomHook**
    - TitleChanger01.js
    - TitleChanger02.js
    - **Hook**
      - useTitlepdater.js

**How to use**
1. inside end component (this case App.js), create the context.
   syntax
```javascript
export const userContext = React.createContext();
```

2. wrap the first children component within that <variable.provider value={"somevalue"}>

like this
    <userContext.Provider value={ganesh}>
    <ComponentTop/>
    </userContext.Provider>

3. now import the context variable in last children component & consume there.
    `import {userContext} from "../../../App";`

& inside that div use arrow function withing consumer tag for prop
    `      <userContext.Consumer>
        {
          user =>{
            return <div>username: {user}</div>
          }
        }
      </userContext.Consumer>`

⚠️: this seems all good until we need to chain multiple props inside each others.

<!-- adding another context at parent -->
```javascript
export const userContext = React.createContext()
export const cityContext = React.createContext()
// above component function

    <userContext.Provider value={"Ganesh"}>
    <cityContext.Provider value={"Kolhapur"}>
    <ComponentTop/>
    </cityContext.Provider>
    </userContext.Provider>
// inside return statement
```


<!-- applying another context at end childer -->
```javascript
import {userContext, cityContext} from "../../../App";
// above funcion

      <userContext.Consumer>
        {
          user =>{
            return (
              <cityContext.Consumer>
              {
                city =>{
                  return <div>username: {user}, city: {city}</div>

                }
              }

              </cityContext.Consumer>
            )
          }
        }
      </userContext.Consumer>
// inside return statement

```

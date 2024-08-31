1. useState
RH_useState
    RH_useState_01  : simple useState
    RH_useState_02  : ideal way to use useState
    RH_useState_03  : useState for Object
    RH_useState_04  : useState for Array
in case of Object & Array always use **spread** operator

2. useEffect
RH_useEffect
    RH_useEffect_01 : but will re run everytime
    RH_useEffect_02 : run only on passed dependancy
    RH_useEffect_03 : run only once with empty [] dependancy
    RH_useEffect_04 : using RH_useEffect_03 component, learned how to stop memory leak
    RH_useEffect_05 : importancy of proper dependancy

Fetch_API_using_useEffect
    DataFetching_01     : how to fetch API using axios
    DataFetching_02     : fetch only targetted data using id & button

3. useContext
RH_useContext
    Approach01  : Consumer part is verbose
        ComponentTop.js
        ComponentMid.js
        ComponentBot.js

    Approach02  : Consumer part is easy
        Layer01Sky.js
        Layer02Land.js
        Layer03Underground.js

4. useReducer
RH_useReducer
    RH_useReducer01.js  : single useReducer
    RH_useReducer02.js  : multiple useReducer
    RH_useReducer03.js  : multiple useReducer easy example

5. useReduce + useContext
RH_Recude_Context


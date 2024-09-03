import {useEffect} from 'react'

function useTitlepdater(count) {
  return (
    useEffect(()=>{
        document.title = `Title ${count}`
    },[count])
  )
}

export default useTitlepdater

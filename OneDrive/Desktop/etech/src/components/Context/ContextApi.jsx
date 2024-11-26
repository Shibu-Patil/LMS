import React, { createContext, useEffect, useState } from 'react'
export let Contextc=createContext()
const ContextApi = ({children}) => {
    let[globalState,setGlobalState]=useState({
        auth:'',
        allCourses:[]
    })
    
let {Provider}=Contextc
useEffect(()=>{
// get alll courses and set as global state to disspllay on home page   
},[])
  return (
<Provider value={{globalState,setGlobalState}}>
    {children}
</Provider>
  )
}

export default ContextApi
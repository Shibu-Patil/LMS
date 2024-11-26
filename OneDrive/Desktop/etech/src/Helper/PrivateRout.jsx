import React, { useContext, useEffect } from 'react'
import { Contextc } from '../components/Context/ContextApi'
import Login from '../components/pages/login/Login'

const PrivateRout = ({children}) => {
    
    let token=sessionStorage.getItem('TOKEN')
    // console.log(token);
    
    
    if (token==null||undefined){
        return <Login></Login>
    }else{
        return <>{children}</>
    }
}

export default PrivateRout
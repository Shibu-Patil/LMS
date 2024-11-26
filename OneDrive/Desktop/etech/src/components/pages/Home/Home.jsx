import React, { useContext } from 'react'
import { Toaster } from 'react-hot-toast'
import { Contextc } from '../../Context/ContextApi';
import CreateBootCamp from '../BootCamp/CreateBootCamp';


const Home = () => {
  let data=useContext(Contextc)
  console.log(data);
  return (
    <div>
      <Toaster></Toaster>
    </div>
  )
}

export default Home
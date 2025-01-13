import React from 'react'
import { useState } from 'react'

const App = () => {
  const [val,setVal] = useState({name:"Sravan",age:20})
  return (
    <div>
      <button onClick={()=>{
        setVal({...val,gender:"male"});
        console.log(val);
        
        }}>click</button>
    </div>
  )
}

export default App

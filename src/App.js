import { useState,useEffect } from 'react';
import './App.css';
import Home from './Home/Home';
import BeatLoader from "react-spinners/BeatLoader";

function App() {
  const [loading, setLoading] = useState(false)

  useEffect(()=>{
    setLoading(true)
    setTimeout(()=>{
      setLoading(false)
    },[2000])
  },[])
  return (
    <div className="App">
      {loading ? <div className='loading'>
        <h1>Loading</h1>
        <BeatLoader 
      color="rgb(128,73,216)" 
      size={30}
      speedMultiplier={1}
      
      />
      </div>
      
          :
       <Home/>}  
    </div>
  );
}

export default App;

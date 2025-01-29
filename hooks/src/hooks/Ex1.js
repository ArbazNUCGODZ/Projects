import {React,useEffect,useState} from 'react'

const Ex1 = () => {

    const[count,setCount]=useState(0);
    const[isOn,setIsOn]=useState(false);
    const[theme,setTheme]=useState("dark");

    const increment=()=>{
        setCount(count+1);
    }

    const toggleTheme=()=>{
        setTheme(theme==="dark"?"light":"dark");
    }

    useEffect(() => {
      console.log("useEffect")
    
      return () => {
        console.log("clean up")
      };
    }, []);
    
    

  return (
    <>

    <div className="container bg-black text-white p-4" >
       
        <h1>Counter</h1>
        <h2>{count}</h2>
        <button onClick={increment}>Increment</button>
        <button onClick={()=>setCount(count-1)}>Decrement</button>
        <button onClick={()=>setCount(0)}>Reset</button>
        <h2>{isOn?"ON":"OFF"}</h2>
        <button onClick={()=>setIsOn(!isOn)}>Toggle</button>
    </div>

    <div className={`container bg-${theme} text-white p-4`}/>
    <button onClick={toggleTheme}>Toggle Theme</button>
    </>
  )
}

export default Ex1
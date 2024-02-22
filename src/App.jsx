import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Detail from "./pages/Detail";

// import React, { useCallback, useState } from "react"


// import React,{ useState,useEffect } from "react";
// import Button from "./components/Button";
// import Text from "./components/Text";

// const Counter =React.memo( ({increment})=>{
//   console.log("render!!!!")
//   return(
//     <>
//     <button onClick={increment}>Arttır</button>
//     </>);
// })
function App() {


  // const [name,setName] =useState("React")

  // useEffect(()=>{
  //   setTimeout(() => {

  //     setName("React güncellendi...")
  //   }, 3000);
  // },[name])

  // const [name,setName] = useState(null);
  // const [data,setData] = useState([]);

  // const clickFun=() => {
  //   setData(prev => ([...prev,name]));
  // }
  // console.log("Data: ",data)

  // const funcTarget= (e)=>{
  //   //console.log(e)//Gelen event içinde neler olduğunu bulmak için kullanılır
  //   setName(e.target.value)
  // }

  // const [count,setCount] = useState(0)

  // const decrement = () =>{
  //   if(count<=0) return
  //   setCount(prev=>prev-1)

  // }

  // const text = window.document.getElementById('text');

  // const countRef = useRef(0);

  
  // const funClick = () =>{
  //   countRef.current++;
  //   console.log(countRef.current, "Textref");

  // }
  // const inputRef = useRef();

  
  // const funFocus = () =>{
  //   inputRef.current.focus();
  // }
  // console.log(inputRef.current," İnput ref")
  // const [count,setCount] = useState(0);
  // const [textChange,setTextChange] = useState("");
  
  // const largeDataFunc =useMemo(()=>{
    //   [...new Array(10000000)].forEach((item)=>{})
    //   return count*3;
    // },[])


    // const [count,setCount] = useState(0);
    // const [text,setText] = useState(null);
    // const increment = useCallback(()=>{
    //   setCount(count+1);
    // },[text])
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </Router>
      {/* <div>
        {count}
      </div>

      <input type="text" onChange={(e)=>setText(e.target.value)} />
      
      <Counter increment={increment}/> */}
      {/* {largeDataFunc}
      <input type="text" onChange={e=> setTextChange(e.target.value)}/> */}

      {/* <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail/:id" element={<Detail />} />
        </Routes>
      </Router> */}

      {/* 
    {name}
    <input type="text" onChange={funcTarget}/>

    <Button onClick={clickFun} name={"Tıkla"}/>
    <div>
      {
        data.map((dt,index)=>(
          <div key={index}>
            {dt}
          </div>
        )
        )
      }
    </div> */}

      {/* <Text name={data}/> */}
      {/* <Button name={"Arttır"} onClick={()=> setCount(count+1)}/>
    <div>
      {count}
    </div>
    <Button name={"Azalt"} onClick={decrement}/> */}

    </>
  )
}

export default App

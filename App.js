import React from "react";
import Counter from "./Components/Counter";
const  App = ()=> {

  return (
    <div  style={{
                  border:"2px solid grey",
                  textAlign:'center',
                  display:"flex" , 
                  flexDirection:'column' ,
                  width:'20%',
                  marginLeft:'40%' ,
                  lineHeight:'1.5' , 
                  backgroundColor:'yellowgreen',
                  boxShadow:'0 0 15px 15px grey',
                  marginTop:'100px'
                  
                  }} className="App">
        <p> Counters!</p>
        <Counter  Defevalue={1}></Counter>
        <Counter Defevalue={5}></Counter>
        <Counter Defevalue={8}></Counter>
        <Counter Defevalue={10}></Counter>

    </div>
  );
}

export default App


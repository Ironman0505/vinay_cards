import { useState } from "react";

import "./styles/App.css"
import Card from "./components/Card";

function App() {

  const data=[
    {
      Name:"Alienx",
      Author:"Max",
      Price:100,
      Year:2003
    },
    {
      Name:"Xlr8",
      Author:"Vilgax",
      Price:33,
      Year:2003
    },
    {
      Name:"Grey Matter",
      Author:"Max",
      Price:9,
      Year:2006
    },
    {
      Name:"Way Big",
      Author:"Vilgax",
      Price:139,
      Year:2010
    },
    {
      Name:"Ghost Freak",
      Author:"Paradox",
      Price:42,
      Year:2000
    },
    {
      Name:"Four Arms",
      Author:"Gwenn",
      Price:50,
      Year:1994
    }
  ]
  const [filter,setFilter]=useState("all");
  const [value,setValue]=useState("");
  const [dispStuff,setDispstuff]=useState(data)
  const xxx=()=>{
    console.log(filter + " "+ value);
     if(filter==="all"){
      setDispstuff(data);
    }
    else if(filter==="" || value===""){
      alert("Select the Filter n Value");
    }
    else{
      console.log(filter+" "+value)
      const fdata=data.filter((card)=>card[filter]==value);
      if(fdata.length==0){
        alert("No such filter!");
        setDispstuff(data);
      }
      else{
      console.log(fdata);
      setDispstuff(fdata);
          }
    }
  }

  return (
    <div className="App" >
      <div className="filter">
      <div>
     <select onChange={e=>setFilter(e.target.value)}  > 
      <option value={"all"} >All</option>
      <option value={"Author"} >Author</option>
      <option value={"Name"} >Name</option>
      <option value={"Price"} >Price</option>
      <option value={"Year"} >Year</option>
     </select>
     </div>
     <div style={{margin:"0 10px"}} >
      <input placeholder="Enter the Filter Value.."  onChange={e=>setValue(e.target.value)}  />
     </div>
    <div>
      <button onClick={xxx} >FilterX</button>
    </div>
     </div>
     {/* {
      filter!=="" && <h4>{filter} {value}</h4>
     } */}
     <h3>Vinay will be succesfull 🖤</h3>

     {
      dispStuff.map((card,id)=>(
       <div  key={id}>
        <Card card={card} />
       </div>
      ))
     }

    
     
     
    </div>
  );
}

export default App;

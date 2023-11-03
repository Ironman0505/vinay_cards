import { useEffect, useState } from "react";
import "./styles/App.css"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Pagination from "react-js-pagination";
import Exmpl from "./components/Exmpl";

function App() {
  const data = [
    {
      Name: "Alienx",
      Image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-WcXlaoPGoVEbPmQEY4eqllOrj13_U5FikvGIvFHuzBYccL752aLhQFbAxqu1ybSh1Fs&usqp=CAU",
      Price: 56,
      Description: "Alienx is a powerful alien with incredible energy manipulation abilities.",
    },
    {
      Name: "Xlr8",
      Image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-WcXlaoPGoVEbPmQEY4eqllOrj13_U5FikvGIvFHuzBYccL752aLhQFbAxqu1ybSh1Fs&usqp=CAU",
      Price: 33,
      Description: "Xlr8 is a speedy alien known for his lightning-fast movements.",
    },
    {
      Name: "Grey Matter",
      Image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-WcXlaoPGoVEbPmQEY4eqllOrj13_U5FikvGIvFHuzBYccL752aLhQFbAxqu1ybSh1Fs&usqp=CAU",
      Price: 9,
      Description: "Grey Matter is a tiny alien with exceptional intelligence and problem-solving skills.",
    },
    {
      Name: "Way Big",
      Image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-WcXlaoPGoVEbPmQEY4eqllOrj13_U5FikvGIvFHuzBYccL752aLhQFbAxqu1ybSh1Fs&usqp=CAU",
      Price: 139,
      Description: "Way Big is a colossal alien with immense strength and cosmic powers.",
    },
    {
      Name: "Ghost Freak",
      Image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-WcXlaoPGoVEbPmQEY4eqllOrj13_U5FikvGIvFHuzBYccL752aLhQFbAxqu1ybSh1Fs&usqp=CAU",
      Price: 42,
      Description: "Ghost Freak is a ghostly alien with the ability to possess and control other beings.",
    },
    {
      Name: "Four Arms",
      Image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-WcXlaoPGoVEbPmQEY4eqllOrj13_U5FikvGIvFHuzBYccL752aLhQFbAxqu1ybSh1Fs&usqp=CAU",
      Price: 50,
      Description: "Four Arms is a powerful alien with four strong arms and incredible combat skills.",
    },
    {
      Name: "Heatblast",
      Image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-WcXlaoPGoVEbPmQEY4eqllOrj13_U5FikvGIvFHuzBYccL752aLhQFbAxqu1ybSh1Fs&usqp=CAU",
      Price: 56,
      Description: "Heatblast is a fiery alien capable of launching scorching fire attacks.",
    },
    {
      Name: "Diamondhead",
      Image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-WcXlaoPGoVEbPmQEY4eqllOrj13_U5FikvGIvFHuzBYccL752aLhQFbAxqu1ybSh1Fs&usqp=CAU",
      Price: 60,
      Description: "Diamondhead has crystalline skin, making him nearly indestructible.",
    },
    {
      Name: "Wildmutt",
      Image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-WcXlaoPGoVEbPmQEY4eqllOrj13_U5FikvGIvFHuzBYccL752aLhQFbAxqu1ybSh1Fs&usqp=CAU",
      Price: 45,
      Description: "Wildmutt is a beastly alien with heightened senses and agility.",
    },
    {
      Name: "Ripjaws",
      Image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-WcXlaoPGoVEbPmQEY4eqllOrj13_U5FikvGIvFHuzBYccL752aLhQFbAxqu1ybSh1Fs&usqp=CAU",
      Price: 38,
      Description: "Ripjaws is an aquatic alien known for its underwater abilities and sharp teeth.",
    },
    {
      Name: "Upgrade",
      Image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-WcXlaoPGoVEbPmQEY4eqllOrj13_U5FikvGIvFHuzBYccL752aLhQFbAxqu1ybSh1Fs&usqp=CAU",
      Price: 34,
      Description: "Eye Guy is a complex alien with multiple eyes on his body, each with different vision and abilities.",
    },
    {
      Name: "Lodestar",
      Image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-WcXlaoPGoVEbPmQEY4eqllOrj13_U5FikvGIvFHuzBYccL752aLhQFbAxqu1ybSh1Fs&usqp=CAU",
      Price: 56,
      Description: "Lodestar a mysterious alien with a horrifying face that terrifies opponents "
    },
    {
      Name: "Nanomech",
      Image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-WcXlaoPGoVEbPmQEY4eqllOrj13_U5FikvGIvFHuzBYccL752aLhQFbAxqu1ybSh1Fs&usqp=CAU",
      Price: 32,
      Description: "Nanomech is a tiny alien with the power to shrink and control technology at the nanoscale.",
    },
    {
      Name: "Kickin Hawk",
      Image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-WcXlaoPGoVEbPmQEY4eqllOrj13_U5FikvGIvFHuzBYccL752aLhQFbAxqu1ybSh1Fs&usqp=CAU",
      Price: 56,
      Description: "Kickin Hawk is a martial arts master with strong legs and powerful kicking abilities.",
    },
    {
      Name: "Feedback",
      Image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-WcXlaoPGoVEbPmQEY4eqllOrj13_U5FikvGIvFHuzBYccL752aLhQFbAxqu1ybSh1Fs&usqp=CAU",
      Price: 52,
      Description: "Feedback is an electrical alien that can absorb and release energy blasts.",
    },
    {
      Name: "Articguana",
      Image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-WcXlaoPGoVEbPmQEY4eqllOrj13_U5FikvGIvFHuzBYccL752aLhQFbAxqu1ybSh1Fs&usqp=CAU",
      Price: 43,
      Description: "Articguana is a cold-resistant alien with the ability to generate and manipulate ice and cold winds.",
    },
    {
      Name: "Whampire",
      Image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-WcXlaoPGoVEbPmQEY4eqllOrj13_U5FikvGIvFHuzBYccL752aLhQFbAxqu1ybSh1Fs&usqp=CAU",
      Price: 63,
      Description: "Whampire is a vampire-like alien with the power to control minds and feed on energy.",
    },
    {
      Name: "Molestache",
      Image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-WcXlaoPGoVEbPmQEY4eqllOrj13_U5FikvGIvFHuzBYccL752aLhQFbAxqu1ybSh1Fs&usqp=CAU",
      Price: 21,
      Description: "Molestache is a quirky alien with a sentient mustache capable of various feats.",
    },
    {
      Name: "Toepick",
      Image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-WcXlaoPGoVEbPmQEY4eqllOrj13_U5FikvGIvFHuzBYccL752aLhQFbAxqu1ybSh1Fs&usqp=CAU",
      Price: 21,
      Description: "Toepick is a mysterious alien with a horrifying face that terrifies opponents.",
    },
    {
      Name: "Snare-oh",
      Image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-WcXlaoPGoVEbPmQEY4eqllOrj13_U5FikvGIvFHuzBYccL752aLhQFbAxqu1ybSh1Fs&usqp=CAU",
      Price: 43,
      Description: "Snare-oh is an ancient mummy alien with bandages that stretch and trap enemies.",
    }
    ]
  
  const [filter,setFilter]=useState("all");
  const [value,setValue]=useState("");
  const [dispStuff,setDispstuff]=useState(data)
  const [sortOrder, setSortOrder] = useState({
    year: "asc",
    price: "asc",
  });
  const [activePage, setActivePage] = useState(1);
  const itemsPerPage = 3;

  const handlePageChange = (pageNumber) => {
    setActivePage(pageNumber);
  };

  const paginatedData = dispStuff.slice(
    (activePage - 1) * itemsPerPage,
    activePage * itemsPerPage
  );

  const toggleSort = (field) => {
    setSortOrder({
      ...sortOrder,
      [field]: sortOrder[field] === "asc" ? "desc" : "asc",
    });
  };

  const applySorting = (field) => {
    const sortedData = [...data].sort((a, b) => {
      if (sortOrder[field] === "asc") {
        return a[field] - b[field];
      } else {
        return b[field] - a[field];
      }
    });

    setDispstuff(sortedData);
  };

  const xxx=()=>{
    console.log(filter + " "+ value);
     if(filter==="all"){
      setDispstuff(data);
    }
    else if(filter==="" || value===""){
      toast.warning("Select the Filter n Value🙁");
    }
    else{
      console.log(filter+" "+value)
      const fdata=data.filter((card)=>card[filter]==value);
      if(fdata.length==0){
        toast.warning("No such data🤧!");
        setDispstuff(data);
      }
      else{
      console.log(fdata);
      setDispstuff(fdata);
      toast.success("Filter Applied 😉")
          }
    }
  }

  useEffect(()=>{
    const paginatedData = dispStuff.slice(
      (activePage - 1) * itemsPerPage,
      activePage * itemsPerPage
    );
  },[])

  return (

   

    <div className="App" >
      
      <div className="filter">
      <div>
     <select onChange={e=>setFilter(e.target.value)}  > 
      <option value={"all"} >All</option>
      {/* <option value={"Author"} >Author</option> */}
      <option value={"Name"} >Name</option>
      <option value={"Price"} >Price</option>
     </select>
     </div>
     <div style={{margin:"0 10px"}} >
      <input placeholder="Enter the Filter Value.."  onChange={e=>setValue(e.target.value)}  />
     </div>
    <div>
      <button style={{"backgroundColor":"#3A6B35"}} className="btn fx btn-success" onClick={xxx} >FilterX</button>
    </div>
     </div>


     {/* <button onClick={() => toggleSort("year")}>Sort by Year</button>
      <button onClick={() => toggleSort("price")}>Sort by Price</button>
      <button onClick={() => applySorting("year")}>
        Apply Year Sorting ({sortOrder.year === "asc" ? "Ascending" : "Descending"})
      </button>
      <button onClick={() => applySorting("price")}>
        Apply Price Sorting ({sortOrder.price === "asc" ? "Ascending" : "Descending"})
      </button> */}


     {/* {
      filter!=="" && <h4>{filter} {value}</h4>
     } */}
     {/* <h3>Vinay will be succesfull 🖤</h3> */}

     <div className="cardgroup">
     {
      paginatedData.map((card,id)=>(
       <div  key={id}>
        <Exmpl card={card} />
       </div>
      ))
     }
     </div>

     <Pagination
        activePage={activePage}
        
        itemsCountPerPage={itemsPerPage}
        totalItemsCount={dispStuff.length}
        pageRangeDisplayed={5}
        onChange={handlePageChange}
        innerClass="pagination"
      />
    
     
<ToastContainer />
     
    </div>
  );
}

export default App;

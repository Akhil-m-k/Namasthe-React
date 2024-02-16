import  {restaurantList} from "../config";
import Restaurant from "./RestaurentCard";
import {useState} from "react";

const filterRestaurants = (restaurants,searchInput)=>{
   return restaurants.filter((restaurant)=>restaurant.data.name.toLowerCase().includes(searchInput.toLowerCase()));
}

const Body =()=>{
    const [searchInput,setSearchInput] = useState();
    const [restaurants,setRestaurants] = useState(restaurantList);
    return (
        <div className="card-section container">
        
        <input type="text" className="search-input" value={searchInput} onChange={(e)=>{
            setSearchInput(e.target.value);
        }}/>
        <button className="search-btn" onClick={()=>{
            const data = filterRestaurants(restaurantList,searchInput);
            setRestaurants(data);
        }}>submit</button>
        
        <div className="row">
            {restaurants.map((restaurant)=>{
              return <Restaurant {...restaurant.data}/>
            })}
        </div>
        </div>
    )
}

export default Body;
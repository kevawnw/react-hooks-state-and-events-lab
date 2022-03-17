import React, {useState} from "react";
import Item from "./Item";


function ShoppingList({ items }) {
  const [state, setState] = useState("Produce")

  function handleEvent(e){
    const cat = e.target.value
    setState(cat)
  }

  const filteredItem = items.filter(item => {
    return state === "All" || item.category === state
  })


  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange = {handleEvent}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {filteredItem.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;

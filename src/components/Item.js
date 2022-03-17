import React, {useState} from "react";


function Item({ name, category }) {
  const [state, setState] = useState(false)

  return (
    <li className={state ? "in-cart":""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className= {state ? "remove": "add"}onClick = {()=> setState(prev => !prev)}>{state ? "Remove from":"Add to"} Cart</button>
    </li>
  );
}

export default Item;

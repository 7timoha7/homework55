import './Burger.css'
import React from "react";
import Salad from "../Salad/Salad";
import Bacon from "../Bacon/Bacon";
import Cheese from "../Cheese/Cheese";
import Meat from "../Meat/Meat";

interface Props {
  ingredientsBurger: string[];
  price: number;
}

const Burger: React.FC<Props> = (props) => {
  let key = 0;
  return (
    <div>
      <div className="Burger">
        <div className="BreadTop">
          <div className="Seeds1"></div>
          <div className="Seeds2"></div>
        </div>
        {props.ingredientsBurger.map((item) => {
          if (item === 'lettuce') {
            key++
            return <Salad key={key}/>
          } else if (item === 'bacon') {
            key++
            return <Bacon key={key}/>
          } else if (item === 'cheese') {
            key++
            return <Cheese key={key}/>
          } else if (item === 'beef') {
            key++
            return <Meat key={key}/>
          }
          return null
        })}
        <div className="BreadBottom"></div>
      </div>
      <div className='price'>Price: {props.price}</div>
    </div>
  );
};

export default Burger;
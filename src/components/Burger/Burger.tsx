import './Burger.css'
import React from "react";
import Salad from "../Salad/Salad";
import Bacon from "../Bacon/Bacon";
import Cheese from "../Cheese/Cheese";
import Meat from "../Meat/Meat";

interface Props {
  countSalad: string[];
}

const Burger: React.FC<Props> = (props) => {

  return (
    <div className="Burger">
      <div className="BreadTop">
        <div className="Seeds1"></div>
        <div className="Seeds2"></div>
      </div>
      {props.countSalad.map((item) => {
        if (item === 'lettuce') {
          return <Salad/>
        } else if (item === 'bacon') {
          return <Bacon/>
        } else if (item === 'cheese') {
          return <Cheese/>
        } else if (item === 'beef') {
          return <Meat/>
        }
        return null
      })}
      <div className="BreadBottom"></div>
    </div>
  );
};

export default Burger;
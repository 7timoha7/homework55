import React from 'react';
import {Ingredient} from "../../types";
import './OneIngredient.css'

interface Props {
  oneIngredient:Ingredient;
  amount: number;
  onClickAdd: React.MouseEventHandler;
  onClickDelete:React.MouseEventHandler;
}

const OneIngredient:React.FC<Props> = (props) => {
  return (
    <div className='one-ingredient-box'>
      <img src={props.oneIngredient.image} alt={props.oneIngredient.name}/>
      <span>{props.oneIngredient.name}</span>
      <span>{props.amount}</span>
      <button className='btn-plus' onClick={props.onClickAdd}></button>
      <button className='btn-minus' onClick={props.onClickDelete}></button>
    </div>
  );
};

export default OneIngredient;
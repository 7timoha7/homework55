import React, {useState} from 'react';
import './App.css';
import Burger from "./components/Burger/Burger";
import {Ingredient} from "./types";
import beefImage from './assets/images/beef.png';
import cheeseImage from './assets/images/cheese.png';
import lettuceImage from './assets/images/lettuce.png';
import baconImage from './assets/images/bacon.png';
import OneIngredient from "./OneIngredient/OneIngredient";

const INGREDIENTS: Ingredient[] = [
  {name: 'beef', ingredientPrice: 80, image: beefImage},
  {name: 'cheese', ingredientPrice: 50, image: cheeseImage},
  {name: 'lettuce', ingredientPrice: 10, image: lettuceImage},
  {name: 'bacon', ingredientPrice: 60, image: baconImage},
]

const getBurger:string [] = [];

function App() {

  const [ingredientsPrint, setIngredientsPrint] = useState([
    {name: 'beef', count: 0},
    {name: 'cheese', count: 0},
    {name: 'lettuce', count: 0},
    {name: 'bacon', count: 0},
  ])



  const amount = (index: number) => {
    const ingredientsPrintCopy = [...ingredientsPrint];
    ingredientsPrintCopy[index].count++;
    getBurger.push(ingredientsPrintCopy[index].name)
    setIngredientsPrint(ingredientsPrintCopy);
  }

  const deleteAmount = (index: number) => {
    const ingredientsPrintCopy = [...ingredientsPrint];
    if (ingredientsPrintCopy[index].count){
      ingredientsPrintCopy[index].count--;
    }
    setIngredientsPrint(ingredientsPrintCopy);
    let myIndex = getBurger.indexOf(ingredientsPrintCopy[index].name);
    if (myIndex !== -1) {
      getBurger.splice(myIndex, 1);
    }
  }

  const printIngredients = INGREDIENTS.map((one) => {
    const index = INGREDIENTS.indexOf(one);
    return (
      <OneIngredient oneIngredient={one} amount={ingredientsPrint[index].count}
                     onClickAdd={() => amount(index)} key={index} onClickDelete={() => deleteAmount(index)}/>
    )
  })


  return (
    <div className="App">
      <div className={'ingredient-box'}>
        {printIngredients}
      </div>
      <div className='burger-box'>
        <Burger countSalad={getBurger}/>
      </div>

    </div>
  );
}

export default App;

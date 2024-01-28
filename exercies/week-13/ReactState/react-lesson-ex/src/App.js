
import { useState } from 'react';
import './App.css';
import { Filter }  from './Components/Filter';

const drinksData = [
  {"name": "Cola Classic", "price": 1.99, "company": "FizzyPop Inc.", "category": "Soda"},
  {"name": "Mountain Mist", "price": 2.05, "company": "Green Valley Beverages", "category": "Soda"},
  {"name": "Lemon Sparkle", "price": 1.85, "company": "CitrusFizz", "category": "Soda"},
  {"name": "Pure Spring Water", "price": 0.99, "company": "AquaPure", "category": "Water"},
  {"name": "Berry Blast Smoothie", "price": 3.50, "company": "Smoothie King", "category": "Smoothie"},
  {"name": "Tropical Mango Tea", "price": 2.25, "company": "TeaTime", "category": "Tea"},
  {"name": "Classic Espresso", "price": 2.75, "company": "BeanBrew", "category": "Coffee"},
  {"name": "Vanilla Latte", "price": 3.00, "company": "BeanBrew", "category": "Coffee"},
  {"name": "Zero Sugar Cola", "price": 2.00, "company": "FizzyPop Inc.", "category": "Sugar Free"},
  {"name": "Green Tea", "price": 2.00, "company": "TeaTime", "category": "Tea"},
  {"name": "Organic Apple Juice", "price": 2.50, "company": "Nature's Best", "category": "Juice"},
  {"name": "Raspberry Lemonade", "price": 2.20, "company": "CitrusFizz", "category": "Lemonade"}
];

function App() {
  const [listOfCategories,setListOfCategories] = useState(["All"])
  const handelListOfCategories = (category) => {
      const newList = listOfCategories
      newList.push(category)
      setListOfCategories(newList)
  }
  drinksData.map((drink) => listOfCategories[drink.category] === undefined? handelListOfCategories(drink.category): null )
  return(
    <>
    <Filter drinksData={drinksData}/>
    
    </>
  )
}

export default App;

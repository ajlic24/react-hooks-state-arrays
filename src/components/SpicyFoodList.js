import React, { useState } from "react";
import { spicyFoods, getNewSpicyFood } from "../data";

function SpicyFoodList() {
  const [foods, setFoods] = useState(spicyFoods);
  const [filterBy, setFilterBy] = useState("All");

  function handleAddFood() {
    const newFood = getNewSpicyFood();
    const newFoodArray = [...foods, newFood]
    setFoods(newFoodArray)
  }

  // function handleDelete(id) {
  //   const newFood = foods.filter(obj => obj.id !== id)
  //   setFoods(newFood)
  // }

  function handleLiClick(id) {
    const newFood = foods.map(foodObj => {
      if(foodObj.id === id) {
        return {...foodObj, heatLevel: foodObj.heatLevel + 1}
      } else {
        return foodObj
      }
    })
    setFoods(newFood)
  }

  // function handleChange(e) {
  //   const newFood = foods.filter(ele=> ele.cuisine === e.target.value)
  //   setFilter(newFood)
  // }
  
  const foodsToDisplay = foods.filter((food) => {
    if (filterBy === "All") {
      return true;
    } else {
      return food.cuisine === filterBy;
    }
  });

  const foodList = foodsToDisplay.map(food => <li onClick={() => handleLiClick(food.id)} key={food.id}>{food.name} | Cuisine: {food.cuisine} | Heat: {food.heatLevel}</li>)

  function handleFilterChange(event) {
    setFilterBy(event.target.value);
  }

  return (
    <div>
      <button onClick={handleAddFood}>Add New Food</button>
      <ul>{foodList}</ul>
      <select name="filter" onChange={handleFilterChange} >
        <option value="All">All</option>
        <option value="American">American</option>
        <option value="Sichuan">Sichuan</option>
        <option value="Thai">Thai</option>
        <option value="Mexican">Mexican</option>
      </select>
    </div>
  );
}

export default SpicyFoodList;

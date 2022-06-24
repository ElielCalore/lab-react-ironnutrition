import foods from './foods.json';
import { useState } from 'react';
import { FoodBox } from './components/FoodBox';
import { AddFoodForm } from './components/AddFoodForm';
import { Search } from './components/Search';
import './app.css';

export function App() {
  const [allFoods, setAllFoods] = useState(foods);

  return (
    <>
      <div>
        <div>
          <p> FOOD LIST </p>
          {allFoods.map((currentElement) => {
            return (
              <div key={currentElement.name}>
                <p>{currentElement.name}</p>
                <img
                  src={currentElement.image}
                  alt="imagem"
                  width={50}
                  height={50}
                />
              </div>
            );
          })}
        </div>

        <div>
          <div>
            <h1 className="center">Add Food Entry</h1>
          </div>
          <div>
            <AddFoodForm allFoods={allFoods} setAllFoods={setAllFoods} />
          </div>
        </div>

        <h1 className="center">FOOD LIST </h1>
        <div className="flexBoxGlobal">
          {allFoods.map((currentElement) => {
            return (
              <div key={currentElement.image}>
                <FoodBox food={currentElement} />
              </div>
            );
          })}
        </div>
      </div>

      <div>
        <Search />
      </div>
    </>
  );
}

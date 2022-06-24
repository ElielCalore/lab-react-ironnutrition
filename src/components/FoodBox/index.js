import style from './style.module.css';
import { Button } from 'antd';

export function FoodBox({ food }) {
  return (
    <>
      <div className={style.foodBoxGlobal}>
        <div className={style.foodBoxName}>
          <h1>{food.name}</h1>
        </div>
        <div>
          <img className={style.foodBoxImage} src={food.image} alt="image1" />
        </div>
        <div>
          <p>Calories: {food.calories}</p>
        </div>
        <div>
          <p>Servings: {food.servings}</p>
        </div>
        <div>
          <p>
            <strong>Total Calories: {food.calories}</strong> Kcal
          </p>
        </div>
        <div>
          <Button type="primary">Delete</Button>
        </div>
      </div>
    </>
  );
}

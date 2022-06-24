import { useState } from 'react';
import style from './style.module.css';

export function AddFoodForm({ allFoods, setAllFoods }) {
  const [form, setForm] = useState([
    {
      name: '',
      image: '',
      calories: '',
      servings: '',
    },
  ]);

  function handleChange(event) {
    setForm({ ...form, [event.target.name]: event.target.value });
    console.log(event + event.target.name + event.target.value);
  }
  function handleSubmit(event) {
    event.preventDefault();
    setAllFoods([...allFoods, form]);
    setForm({
      name: '',
      image: '',
      calories: '',
      servings: '',
    });
  }

  return (
    <div className={style.formGlobal}>
      <form>
        <div>
          <div className={style.formLabel}>
            <label>Name </label>
          </div>
          <div className={style.formInput}>
            <input name="name" onChange={handleChange} value={form.name} />
          </div>
          <div className={style.formLabel}>
            <label>Image </label>
          </div>
          <div className={style.formInput}>
            <input name="image" onChange={handleChange} value={form.image} />
          </div>
          <div className={style.formLabel}>
            <label>Calories </label>
          </div>
          <div className={style.formInput}>
            <input
              name="calories"
              onChange={handleChange}
              value={form.calories}
            />
          </div>
          <div className={style.formLabel}>
            <label>Servings </label>
          </div>
          <div className={style.formInput}>
            <input
              name="servings"
              onChange={handleChange}
              value={form.servings}
            />
          </div>

          <button onClick={handleSubmit}>Create</button>
        </div>
      </form>
    </div>
  );
}

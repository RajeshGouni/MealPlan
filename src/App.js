import React , {useState}from 'react'
import MealList from './MealList';

export default function App() {
  const [mealData,setMealData] = useState(null);
  const [calories,setCalories] = useState(2000);
  
function getMealData(){
  fetch(
    `https://api.spoonacular.com/mealplanner/generate?apiKey=4f053b5c5b584ca89d52e513c0f84fb0&timeFrame=day&targetCalories=${calories}`
  )
    .then((response) => response.json())
    .then((data) => {
      setMealData(data);
    })
    .catch(() => {
      console.log("error");
    });

}
  return (
    <div className='App'>
     <section className='controls'>
      <input type='number' placeholder='Calories (e.g.2000)' 
      onChange={(e) => setCalories(e.target.value)}></input>
     </section>
     <button className="button" onClick={getMealData}>Get Daily Meal Plan</button>
     {mealData && <MealList mealData={mealData}/>}
    </div>
  )
}



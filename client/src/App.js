import './App.css';

import Add from "./Components/Add.js"
import SliderImages from "./Components/SliderImages"
import CardSlider from "./Components/CardSlider.js"
// import AddRecipe from './Components/AddRecipe';


function App() {
  return (
    <div style={{padding:" 0px 80px"}}>
      <SliderImages/>
      <br/>
      <hr></hr>
      <h2>Recipes you will like:-</h2>
      <CardSlider/>
      <Add/>
    </div>
  );
}

export default App;

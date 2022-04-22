import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import Header from "./Components/Header.js"
import Footer from "./Components/Footer.js"
import SignUp from "./Components/SignUp.js"
import Profile from "./Components/Profile"
import RecipeInfo from "./Components/RecipeInfo"
import LoginPage from "./Components/LoginPage"
import AddRecipe from './Components/AddRecipe'
<<<<<<< HEAD
import FilterRecipe from './Components/FilterRecipes'
import Ingredients from './Components/Ingredients';
=======
>>>>>>> 51507b2dc3a34bac2f0ea644f9e17581db09eb50
import {
  BrowserRouter,
  Routes,
  Route,
  // Link
} from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" element={<App />}/>
        <Route path="/SignUpPage" element={<SignUp />} />
        <Route path="/LoginPage" element={<LoginPage />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/RecipeInfo" element={<RecipeInfo />} />
        <Route path="/AddRecipe" element={<AddRecipe />} />
<<<<<<< HEAD
        <Route path="/FilterRecipe" element={<FilterRecipe />} />
        <Route path='/Ingredients' element={<Ingredients/>} />
=======
       
>>>>>>> 51507b2dc3a34bac2f0ea644f9e17581db09eb50
    </Routes>
    <Footer/>
  </BrowserRouter>,
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();

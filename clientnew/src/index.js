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
import FilterRecipe from './Components/FilterRecipes'
import UpdateProfile from './Components/UpdateProfile'
import Logout from './Components/Logout'
import ErrorPage from './Components/ErrorPage'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

require('dotenv').config();

ReactDOM.render(
  <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" element={<App />}/>
      <Route path="/recipe/:recipeId" element={<RecipeInfo />} />
        <Route path="/SignUpPage" element={<SignUp />} />
        <Route path="/LoginPage" element={<LoginPage />} />
        <Route path="/Profile" element={<Profile />}/>
        <Route path="Profile/:recipeId" element={<RecipeInfo />} />
        <Route path="/UpdateProfile" element={<UpdateProfile/>}/>
        <Route path="/RecipeInfo" element={<RecipeInfo />} />
        <Route path="/AddRecipe" element={<AddRecipe />} />
        <Route path="/FilterRecipe" element={<FilterRecipe />} />
        <Route path="/FilterRecipe/:recipeId" element={<RecipeInfo/>} />
        <Route path="/logout" element={<Logout/>} />
        <Route path="*" element={<ErrorPage/>} />
    </Routes>
    <Footer/>
  </BrowserRouter>,
  document.getElementById('root')
);

reportWebVitals();

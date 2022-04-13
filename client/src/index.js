import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import AddRecipe from './Components/AddRecipe.js'
import Header from "./Components/Header.js"
import Footer from "./Components/Footer.js"
import SignUp from "./Components/SignUp.js"
import Profile from "./Components/Profile"
import RecipeInfo from "./Components/RecipeInfo"
import LoginPage from "./Components/LoginPage"
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
        <Route path="/addRecipePage" element={<AddRecipe />} />
        <Route path="/SignUpPage" element={<SignUp />} />
        <Route path="/LoginPage" element={<LoginPage />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/RecipeInfo" element={<RecipeInfo />} />
        {/* <Route path="teams" element={<Teams />}>
          <Route path=":teamId" element={<Team />} />
          <Route path="new" element={<NewTeamForm />} />
          <Route index element={<LeagueStandings />} />
        </Route> */}
      {/* </Route> */}
    </Routes>
    <Footer/>
  </BrowserRouter>,
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();

import "./App.css";
import React from 'react';
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Register from "./components/Register";
import ForgotPassword from "./components/ForgotPassword";
import PrivateComponent from "./components/PrivateComponent";
import Recipes from "./components/Recipes";
import AddRecipe from "./components/AddRecipe";
import LikedProducts from "./components/likedProducts";
import TeamComponent from "./components/team.component";
import HomeComponent from "./components/home.component";
import Landing from "./components/landing.component";

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Landing />} /> 
        <Route path="home" element={<HomeComponent />} /> 
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/forgotPassword" element={<ForgotPassword />} />

        <Route element={<PrivateComponent />}>
          <Route path="/favouriteRecipes" element={<LikedProducts />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/addRecipe" element={<AddRecipe />} />
          <Route path="/team" element={<TeamComponent />} /> 
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

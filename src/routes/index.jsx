import { Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Home from "../pages/Home"
import RecipeViewPage from "../pages/RecipeViewPage";

const RoutesMain = () => (
  <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/register" element={<Register/>} />
    <Route path="/login" element={<Login/>} />
    <Route path="/recipe" element={<RecipeViewPage/>} />
  </Routes>
  
);
export default RoutesMain;
import { Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Home from "../pages/Home"

const RoutesMain = () => (
  <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/register" element={<Register/>} />
    <Route path="/login" element={<Login/>} />
  </Routes>
  
);
export default RoutesMain;
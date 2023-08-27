import { Routes, Route } from "react-router-dom";
import { Home } from "../Home/Home";
import { Login } from "../Login/Login";
import { Register } from "../Register/Register";
import {NewCar } from "../NewCar/NewCar";
import { Profile } from "../Profile/Profile";
import { ShowCar } from "../ShowCar/ShowCar";

export const Body = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/newcar" element={<NewCar />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/showcar" element={<ShowCar />} />
      </Routes>
    </>
  );
};

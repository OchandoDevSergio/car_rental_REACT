import { useNavigate } from "react-router-dom";
import "./Header.css";

import { useSelector, useDispatch } from "react-redux";
import { userDataCheck, userout } from "../../pages/userSlice";
import { useEffect, useState } from "react";
import { Input } from "../Input/Input";
import { searchCriteria } from "../../services/apiCalls";
import { loadCarData } from "../../pages/carSlice";
import { carDataCheck } from "../../pages/carSlice";
export const Header = () => {
  //Instanciamos useNavigate dentro de navigate para poder navegar
  const navigate = useNavigate();

  //instanciamos la lectura
  const rdxCarData = useSelector(carDataCheck);
  const reduxUserData = useSelector(userDataCheck); 
  //Instanciamos Redux en modo ESCRITURA
  const dispatch = useDispatch();

  const [criteria, setCriteria] = useState("");

  // useEffect(()=>{
  //     console.log("soy REDUX con el HEADER .... y cambio a.....", reduxUserData.credentials?.userData)
  // },[reduxUserData]);

  const logOut = () => {
    dispatch(userout({ credentials: {} }));
    navigate("/");
  };

  const searchCars = (cars) =>{
    dispatch(loadCarData({ carData: cars}));
  }; 

  const inputHandler = (e) => {
    setCriteria(e.target.value);
  };

  useEffect(() => {
    if(criteria !== ""){
      searchCriteria(criteria)
        .then(
          results => {
            //console.log("éstos son los resultados de la búsqueda", results);
            searchCars(results);
            //console.log("esto es carData", rdxCarData);
          }
        )
        .catch(error => console.log(error));
    }
  }, [criteria]);

  return (
    <div className="header">
      <img
        className="homeButton"
        src="https://i.ibb.co/4VrXmfC/logoCR.jpg"
        alt="logo"
        onClick={() => navigate("/")}
      />
      <div className="spaceDivHeader"></div>
      <Input
        type={"text"}
        placeholder="Search cars by brand"
        value={criteria}
        name={"criteria"}
        className="defaultInput"
        manejadora={inputHandler}
      />
      {reduxUserData.credentials.token ? (
        <>
          <div className="loginRegisterDiv">
            {reduxUserData.credentials.userData.roleId === 1 && (
              //Este AND haría referencia a un entonces.....

              <div className="buttonClicker" onClick={() => navigate("/admin")}>
                Admin
              </div>
            )}

            <div className="buttonClicker" onClick={() => navigate("/profile")}>
              {reduxUserData.credentials?.userData?.userName}
            </div>
            <div className="buttonClicker" onClick={() => logOut()}>
              log out
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="loginRegisterDiv">
            <div className="buttonClicker" onClick={() => navigate("/login")}>
              Login
            </div>
            <div
              className="buttonClicker"
              onClick={() => navigate("/register")}
            >
              Register
            </div>
          </div>
        </>
      )}
    </div>
  );
};

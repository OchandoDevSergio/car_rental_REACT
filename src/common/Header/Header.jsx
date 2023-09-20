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

  //Instanciamos Redux en modo lectura
  const rdxCarData = useSelector(carDataCheck);
  const reduxUserData = useSelector(userDataCheck);
  //Instanciamos Redux en modo ESCRITURA
  const dispatch = useDispatch();

  const [criteria, setCriteria] = useState("");

  const logOut = () => {
    dispatch(userout({ credentials: {} }));
    navigate("/");
  };

  const searchCars = (cars) => {
    dispatch(loadCarData({ carData: cars }));
  };

  const inputHandler = (e) => {
    setCriteria(e.target.value);
  };

  useEffect(() => {
    //console.log("soy criteria", criteria);
    if (criteria !== "") {
      const search = setTimeout(() => {
        searchCriteria(criteria)
          .then((results) => {
            searchCars(results);
            console.log(results);
          })
          .catch((error) => console.log(error));
      }, 375);

      return () => clearTimeout(search);
    } else if (criteria == ""){
      searchCriteria(criteria)
      .then((results) => {
        searchCars(results);})
    }
  }, [criteria]);

  // useEffect(() => {
  //   if (criteria !== "") {
  //     const traer = setTimeout(() => {
  //       bringMovies(criteria)
  //         .then((searchResults) => {
  //           console.log(searchResults)
  //           setMovies(searchResults.data.results);
  //         })
  //         .catch((error) => console.log(error));
  //     }, 375);

  //     return () => clearTimeout(traer);
  //   } else {
  //     if (movies.length !== 0) {
  //       setMovies([]);
  //     }
  //   }
  // }, [criteria]);

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
              //Este && haría referencia a un entonces

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

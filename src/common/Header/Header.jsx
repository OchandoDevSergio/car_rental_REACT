import { useNavigate } from "react-router-dom";
import "./Header.css";

import { useSelector, useDispatch } from "react-redux";
import { userDataCheck, userout } from "../../pages/userSlice";
import { useEffect } from "react";
export const Header = () => {
  //Instanciamos useNavigate dentro de navigate para poder navegar
  const navigate = useNavigate();

  //Instanciamos Redux en modo LECTURA
  const reduxUserData = useSelector(userDataCheck);

  //Instanciamos Redux en modo ESCRITURA
  const dispatch = useDispatch();

  // useEffect(()=>{
  //     console.log("soy REDUX con el HEADER .... y cambio a.....", reduxUserData.credentials?.userData)
  // },[reduxUserData]);

  const logOut = () => {
    dispatch(userout({ credentials: {} }));
    navigate("/");
  };

  return (
    <div className="header">
      {reduxUserData.credentials.token ? (
        <>
          <img
            className="homeButton"
            src="https://i.ibb.co/4VrXmfC/logoCR.jpg"
            alt="logo"
            onClick={() => navigate("/")}
          />
          <div className="spaceDiv"></div>
          <div className="loginRegisterDiv">
            {
              reduxUserData.credentials.userData.roleId === 1 &&
              //Este AND haría referencia a un entonces.....

              <div className="buttonClicker" onClick={() => navigate("/admin")}>
                Admin
              </div>

            }
            
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
          <img
            className="homeButton"
            src="https://i.ibb.co/4VrXmfC/logoCR.jpg"
            alt="logo"
            onClick={() => navigate("/")}
          />
          <div className="spaceDiv"></div>
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

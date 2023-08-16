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

  useEffect(()=>{
      console.log("emitiendo desde HEADER el valor redux de user data", reduxUserData.credentials)
  },[reduxUserData]);

  return (
    <div className="header">
      {reduxUserData.credentials.token ? (
        <>
        <div className="buttonClicker" onClick={() => navigate("/")}>
          Home
        </div>
        <div className="buttonClicker" onClick={() => navigate("/profile")}>
          {reduxUserData.credentials.userData.userName}
        </div>
        <div className="buttonClicker" onClick={() => dispatch(userout({credentials: {}}))}>
          log out
        </div>
      </>
      ) : (
        <>
          <div className="buttonClicker" onClick={() => navigate("/")}>
            Home
          </div>
          <div className="buttonClicker" onClick={() => navigate("/login")}>
            Login
          </div>
          <div className="buttonClicker" onClick={() => navigate("/register")}>
            Register
          </div>
        </>
      )}
    </div>
  );
};

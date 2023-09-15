import "./Admin.css";
import { useNavigate } from "react-router-dom";

import { useEffect } from "react";

import { useSelector } from "react-redux";
import { userDataCheck } from "../userSlice";

export const Admin = () => {
  const navigate = useNavigate();

  //Inicializamos o instanciamos REDUX en modo lectura
  const datosReduxUser = useSelector(userDataCheck);

  useEffect(() => {
    if (datosReduxUser.credentials?.userData?.roleId !== 1) {
      navigate("/");
    }
  }, [datosReduxUser]);

  return (
    <div className="adminDiv">
      <div className="buttonAdmin" onClick={() => navigate("/newcar")}>
        Add a new car
      </div>
      <div></div>
      <div className="buttonAdmin" onClick={() => navigate("/userslist")}>
        Users list
      </div>
    </div>
  );
};

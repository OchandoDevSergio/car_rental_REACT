import { Input } from "../../common/Input/Input";
import { useNavigate } from "react-router-dom";
import "./Login.css";

import { useState, useEffect } from "react";
import { loginUser } from "../../services/apiCalls";

import jwt_decode from "jwt-decode";

//REDUX......
//Importo métodos de Redux
import { useDispatch, useSelector } from "react-redux";
import { login, userDataCheck } from "../userSlice";

export const Login = () => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  //Instancia Redux modo LECTURA
  const dataUserRedux = useSelector(userDataCheck);

  useEffect(()=>{
    console.log(dataUserRedux, "sdfdddd")
  },[dataUserRedux])

  //Instancia Redux en modo ESCRITURA
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const inputHandler = (e) => {
    //bindeo...

    setCredentials((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const loginMe = () => {
    loginUser(credentials)
      .then((resultado) => {

        const userCredentials = {
          token: resultado.data.token,
          userData: jwt_decode(resultado.data.token)
        }
        //El token ha llegado del backend...ahora lo GUARDO en RDX
        dispatch(login({ credentials: userCredentials}))

        //Navegamos a home......
        navigate("/");
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="container-fluid login">
      {/* <pre>{JSON.stringify(credentials, null,2)}</pre> */}
      {/* Este elemento pre nos sirve para renderizar en pantalla el valor del hook
      desde que se carga el componente, es una especie de utilidad para el desarrollador
      para que éste pueda comprobar el valor que tiene el hook y si está correctamente bindeado. */}
      <div className="row upRowLogin"></div>
      <div className="row middleRowLogin">
        <Input
          type={"email"}
          placeholder="Introduce your e-mail"
          value={credentials.email}

          name={"email"}
          manejadora={inputHandler}
        />
        <Input
          type={"password"}
          placeholder="Introduce your password"
          value={credentials.password}

          name={"password"}
          manejadora={inputHandler}
        />
      </div>
      <div className="row downRowLogin">
        <div className="col"></div>
        <div className="col buttons">
          <div className="buttonBody" onClick={() => loginMe()}>
            Login
          </div>
          <div className="messageBox">If you don't have an acount click on the button to register</div>
          <div className="buttonBody" onClick={() => navigate("/register")}>
            Register
          </div>
          </div>
        <div className="col"></div>
      </div>
    </div>
  );
};

import { Input } from "../../common/Input/Input";
import { useNavigate } from "react-router-dom";
import "./Login.css";

import { useState } from "react";
import { loginUser } from "../../services/apiCalls";

export const Login = () => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

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
        console.log(resultado);
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
          name={"email"}
          manejadora={inputHandler}
        />
        <Input
          type={"password"}
          placeholder="Introduce your password"
          name={"password"}
          manejadora={inputHandler}
        />
      </div>
      <div className="row downRowLogin">
        <div className="buttonClicker" onClick={() => loginMe()}>
          Login
        </div>
        <div>If you don't have an acount click on the button to register</div>
        <div className="buttonClicker" onClick={() => navigate("/register")}>
          Register
        </div>
      </div>
    </div>
  );
};

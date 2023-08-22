import { Input } from "../../common/Input/Input";
import "./Profile.css";

import { useState, useEffect } from "react";
import { modifyUser } from "../../services/apiCalls";

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { userDataCheck, changeUser} from "../userSlice";
import { useNavigate } from "react-router-dom";

export const Profile = () => {
  const reduxUserData = useSelector(userDataCheck); //modo solo lectura de redux

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const [modifyUserBody, setModifyUserBody] = useState(
    {
      id: reduxUserData?.credentials?.userData?.userId,
      name: "",
      surnames: "",
      dni: "",
      email: "",
      phone: "",
      password: "",
      role_id: reduxUserData?.credentials?.userData?.roleId
    }
  );

  const [password2, setPassword2] = useState({
    password_repeat: "",
  });


  useEffect(()=>{
    console.log(reduxUserData, "GONORREAAAAAAAAAAA")
  },[reduxUserData]);

  //BINDEO
  const inputHandler = (e) => {
    setModifyUserBody((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));

    setPassword2((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const modifyMe = () => {
    if (modifyUserBody.password == password2.password_repeat) {
      modifyUser(modifyUserBody, reduxUserData.credentials)
        .then((resultado) => {

          const newUserData = {
            token: reduxUserData?.credentials?.token,
            userData: resultado.data.data
          }
          
          dispatch(changeUser({credentials: newUserData}))
          navigate("/");
          
        })
        .catch((error) => console.log(error));
    } else {
      console.log("los passwords no coinciden");
    }
  };

  return (
    <div className="container-fluid register">
      <div className="Row title">Modify your user data</div>
      <div className="row upRowRegister">
        <div className="col-1"></div>
        <div className="col-5">
          <div className="row inputRow">
            <Input
              type={"text"}
              placeholder={reduxUserData.credentials?.userData?.userName}
              name={"name"}
              className="defaultInput"
              manejadora={inputHandler}
            />
          </div>
          <div className="row inputRow">
            <Input
              type={"text"}
              placeholder= {reduxUserData.credentials?.userData?.userSurnames}
              name={"surnames"}
              className="defaultInput"
              manejadora={inputHandler}
            />
          </div>
          <div className="row inputRow">
            <Input
              type={"text"}
              placeholder={reduxUserData.credentials?.userData?.userDni}
              name={"dni"}
              className="defaultInput"
              manejadora={inputHandler}
            />
          </div>
          <div className="row inputRow">
            <Input
              type={"email"}
              placeholder={reduxUserData.credentials?.userData?.userEmail}
              name={"email"}
              className="defaultInput"
              manejadora={inputHandler}
            />
          </div>
        </div>
        <div className="col-5">
          <div className="row inputRow">
            <Input
              type={"number"}
              placeholder={reduxUserData.credentials?.userData?.userPhone}
              name={"phone"}
              className="defaultInput"
              manejadora={inputHandler}
            />
          </div>
          <div className="row inputRow">
            <Input
              type={"password"}
              placeholder="Introduce your new password"
              name={"password"}
              className="defaultInput"
              manejadora={inputHandler}
            />
          </div>
          <div className="row inputRow">
            <Input
              type={"password"}
              placeholder="Repeat your new password"
              name={"password_repeat"}
              className="defaultInput"
              manejadora={inputHandler}
            />
          </div>
          <div className="row inputRow"></div>
        </div>
        <div className="col-1"></div>
      </div>
      <div className="row downRowRegister">
        <div className="buttonClicker" onClick={() => modifyMe()}>
          Modify
        </div>
      </div>
    </div>
  );
};

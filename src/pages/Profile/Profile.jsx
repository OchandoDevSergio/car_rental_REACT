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
      name: reduxUserData.credentials?.userData?.userName,
      surnames: reduxUserData.credentials?.userData?.userSurnames,
      dni: reduxUserData.credentials?.userData?.userDni,
      email: reduxUserData.credentials?.userData?.userEmail,
      phone: reduxUserData.credentials?.userData?.userPhone,
      password: "",
      role_id: reduxUserData?.credentials?.userData?.roleId
    }
  );

  const [modifyUserBodyError, setModifyUserBodyError] = useState(
      
    {
      nameError: "",
      surnamesError: "",
      dniError: "",
      emailError: "",
      phoneError: "",
      passwordError: "",
      password_repeatError: ""
    }
  )

  const [password2, setPassword2] = useState({
    password_repeat: "",
  });


  useEffect(()=>{
    console.log(modifyUserBody, "GONORREAAAAAAAAAAA")
  },[modifyUserBody]);

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

      for(let check in modifyUserBody){
        console.log(check);
        if(modifyUserBody[check] === ""){
          //está vacio y no dejo continuar.....
          console.log("fuck you");
          return;
        }


      }
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
              placeholder=""
              value={modifyUserBody.name}
              name={"name"}
              className="defaultInput"
              manejadora={inputHandler}
            />
            {modifyUserBodyError.nameError}
          </div>
          <div className="row inputRow">
            <Input
              type={"text"}
              placeholder=""
              value={modifyUserBody.surnames}
              name={"surnames"}
              className="defaultInput"
              manejadora={inputHandler}
            />
            {modifyUserBodyError.surnamesError}
          </div>
          <div className="row inputRow">
            <Input
              type={"text"}
              placeholder=""
              value={modifyUserBody.dni}
              name={"dni"}
              className="defaultInput"
              manejadora={inputHandler}
            />
            {modifyUserBodyError.dniError}
          </div>
          <div className="row inputRow">
            <Input

              type={"email"}
              placeholder=""
              value={modifyUserBody.email}
              name={"email"}
              className="defaultInput"
              manejadora={inputHandler}
            />
            {modifyUserBodyError.emailError}
          </div>
        </div>
        <div className="col-5">
          <div className="row inputRow">
            <Input
              type={"number"}
              placeholder=""
              // placeholder={reduxUserData.credentials?.userData?.userPhone}
              value={modifyUserBody.phone}
              name={"phone"}
              className="defaultInput"
              manejadora={inputHandler}
            />
            {modifyUserBodyError.phoneError}
          </div>
          <div className="row inputRow">
            <Input
              type={"password"}
              placeholder="Introduce your new password"
              value={modifyUserBody.password}
              name={"password"}
              className="defaultInput"
              manejadora={inputHandler}
            />
            {modifyUserBodyError.passwordError}
          </div>
          <div className="row inputRow">
            <Input
              type={"password"}
              placeholder="Repeat your new password"
              value={modifyUserBody.password_repeat}
              name={"password_repeat"}
              className="defaultInput"
              manejadora={inputHandler}
            />
            {modifyUserBodyError.password_repeatError}
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

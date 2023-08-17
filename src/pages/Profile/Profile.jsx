
import { Input } from "../../common/Input/Input";
import './Profile.css'

import { useState } from "react";
import { modifyUser } from "../../services/apiCalls";

import { useSelector } from "react-redux";
import { userDataCheck } from "../userSlice";

export const Profile = () => {

    const reduxUserData = useSelector(userDataCheck);//modo solo lectur de redux

    const [modifyUserBody, setModifyUserBody] = useState({

        name: "",
        surnames: "",
        dni: "",
        email: "",
        phone: "",
        password: ""
    },
      {
                where: {
          id: reduxUserData.credentials.userData.userId 
        }
      });

    const [password2, setPassword2] = useState({
    
        password_repeat: ""
    });

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
    
        modifyUser(modifyUserBody)
          .then((resultado) => {
            console.log(resultado);
          })
          .catch((error) => console.log(error));
        } else {console.log("los passwords no coinciden")}
      };

      return (
        <div className="container-fluid register">
          <div className="Row title">Modify your user data</div>
          <div className='row upRowRegister'>
            <div className='col-1'></div>
            <div className='col-5'>
              <div className='row inputRow'>
                <Input 
                  type={"text"}
                  placeholder="Introduce your name"
                  name={"name"}
                  className='defaultInput'
                  manejadora={inputHandler}/>
              </div>
              <div className='row inputRow'>
                <Input 
                  type={"text"}
                  placeholder="Introduce your surnames"
                  name={"surnames"}
                  className='defaultInput'
                  manejadora={inputHandler}/>  
              </div>
              <div className='row inputRow'>
                <Input 
                  type={"text"}
                  placeholder="Introduce your DNI"
                  name={"dni"}
                  className='defaultInput'
                  manejadora={inputHandler}/> 
              </div>
              <div className='row inputRow'>
                <Input
                  type={"email"}
                  placeholder="Introduce your new e-mail"
                  name={"email"}
                  className='defaultInput'
                  manejadora={inputHandler} />
              </div>
            </div>
            <div className='col-5'>
              <div className='row inputRow'>
                <Input 
                  type={"number"}
                  placeholder="Introduce your phone number"
                  name={"phone"}
                  className='defaultInput'
                  manejadora={inputHandler} />
              </div>
              <div className='row inputRow'>
                <Input 
                  type={"password"}
                  placeholder="Introduce your new password"
                  name={"password"}
                  className='defaultInput'
                  manejadora={inputHandler}/>
              </div>
              <div className='row inputRow'>
                <Input 
                  type={"password"}
                  placeholder="Repeat your new password"
                  name={"password_repeat"}
                  className='defaultInput'
                  manejadora={inputHandler}/>
              </div>
              <div className='row inputRow'></div>
            </div>
            <div className='col-1'></div> 
          </div>   
          <div className='row downRowRegister'>
            <div className="buttonClicker" onClick={() => modifyMe()}>Modify</div>
          </div>

        </div>
    )

}
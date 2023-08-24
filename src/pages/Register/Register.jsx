import { Input } from '../../common/Input/Input'
import './Register.css'

import { useState } from "react";
import { registerUser } from "../../services/apiCalls";


export const Register = () => {

  const [registerBody, setRegisterBody] = useState({
    
      role_id: 2,
      name: "",
      surnames: "",
      dni: "",
      email: "",
      phone: "",
      password: ""
  });

  const [password2, setPassword2] = useState({
    
    password_repeat: ""
});

  //BINDEO
  const inputHandler = (e) => {
    // console.log(registerBody.password)
    // console.log(password2.password_repeat)
    setRegisterBody((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));

    setPassword2((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));

  };

  const registerMe = () => {

    if (registerBody.password == password2.password_repeat) {

    registerUser(registerBody)
      .then((resultado) => {
        console.log(resultado);
      })
      .catch((error) => console.log(error));
    } else {console.log("los passwords no coinciden")}
  };

    return (
        <div className="container-fluid register">
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
                  placeholder="Introduce your e-mail"
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
                  placeholder="Introduce your password"
                  name={"password"}
                  className='defaultInput'
                  manejadora={inputHandler}/>
              </div>
              <div className='row inputRow'>
                <Input 
                  type={"password"}
                  placeholder="Repeat your password"
                  name={"password_repeat"}
                  className='defaultInput'
                  manejadora={inputHandler}/>
              </div>
              <div className='row inputRow'></div>
            </div>
            <div className='col-1'></div> 
          </div>   
          <div className='row downRowRegister'>
            <div className="buttonBody" onClick={() => registerMe()}>Register</div>
          </div>

        </div>
    )
}
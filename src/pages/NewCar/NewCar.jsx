
import { Input } from '../../common/Input/Input'
import './NewCar.css'

import { useState } from "react";
import { registerCar } from "../../services/apiCalls";
import { useSelector } from "react-redux";
import { userDataCheck } from "../userSlice";

export const NewCar = () => {

  const [newCarBody, setNewCarBody] = useState({
    
    plate_number: "",
    model: "",
    year: "",
    picture: ""

  });

  const dataUserRedux = useSelector(userDataCheck);

//BINDEO
const inputHandler = (e) => {

  setNewCarBody((prevState) => ({
    ...prevState,
    [e.target.name]: e.target.value,
  }));

};

  const registerThisCar = () => {

    registerCar(newCarBody, dataUserRedux.credentials)
      .then((resultado) => {
        console.log(resultado);
      })
      .catch((error) => console.log(error));

  };

    return (
        <div className="container-fluid newCar">
          <div className='row upRow'>
          <Input 
            type={"text"}
            placeholder="Introduce the plate number"
            value={newCarBody.plate_number}
            name={"plate_number"}
            className='defaultInput'
            manejadora={inputHandler}/>
          <Input 
            type={"text"}
            placeholder="Introduce the model"
            value={newCarBody.model}
            name={"model"}
            className='defaultInput'
            manejadora={inputHandler}/>   
          <Input 
            type={"number"}
            placeholder="Introduce the year of manufacture"
            value={newCarBody.year}
            name={"year"}
            className='defaultInput'
            manejadora={inputHandler}/>   
          <Input 
            type={"text"}
            placeholder="Introduce the URL with the picture"
            value={newCarBody.picture}
            name={"picture"}
            className='defaultInput'
            manejadora={inputHandler}/> 
          </div>
          <div className='row downRow'>
            <div className="buttonBodyCar"  onClick={() => registerThisCar()}>Introduce car</div>
          </div>
        </div>
    )
}
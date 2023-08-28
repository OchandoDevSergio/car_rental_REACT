
import { Input } from '../../common/Input/Input'
import './NewCar.css'

import { useState } from "react";
import { registerCar } from "../../services/apiCalls";

export const NewCar = () => {

  const [newCarBody, setNewCarBody] = useState({
    
    plate_number: "",
    model: "",
    year: "",
    picture: ""

});

//BINDEO
const inputHandler = (e) => {

  setNewCarBody((prevState) => ({
    ...prevState,
    [e.target.name]: e.target.value,
  }));

};

  const registerThisCar = () => {

    registerCar(newCarBody)
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
            name={"plate_number"}
            className='defaultInput'
            manejadora={inputHandler}/>
          <Input 
            type={"text"}
            placeholder="Introduce the model"
            name={"model"}
            className='defaultInput'
            manejadora={inputHandler}/>   
          <Input 
            type={"number"}
            placeholder="Introduce the year of manufacture"
            name={"year"}
            className='defaultInput'
            manejadora={inputHandler}/>   
          <Input 
            type={"text"}
            placeholder="Introduce the URL with the picture"
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
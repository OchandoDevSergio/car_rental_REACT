import "./ShowCar.css";

//rdx connection

import { useSelector } from "react-redux";
import { carDataCheck } from "../carSlice";
import { useEffect } from "react";
export const ShowCar = () => {

  //instanciamos la lectura
  const rdxCarData = useSelector(carDataCheck);


  useEffect(()=>{
    console.log(rdxCarData, "limon granizado de malibu");
  },[rdxCarData]);

  return (
    <div className="container-fluid showCar">
      <img src={rdxCarData.carData.picture} alt={rdxCarData.carData.id} /> 
      <div>{rdxCarData.carData.model}</div>
      <div>{rdxCarData.carData.year}</div>
      <div>{rdxCarData.carData.plate}</div>
    </div>
  );
};

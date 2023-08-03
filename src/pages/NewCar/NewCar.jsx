
import { InputText, InputNumber } from '../../common/Input/Input'
import './NewCar.css'

export const NewCar = () => {

    return (
        <div className="newCar">
          <InputText placeholder="Introduzca la matrícula del vehículo" />
          <InputText placeholder="Introduzca el modelo del vehículo" />   
          <InputNumber placeholder="Introduzca el año de fabricación del vahículo" />   
          <InputText placeholder="Introduzca la dirección url de la imágen del vehículo" />   
        </div>
    )
}
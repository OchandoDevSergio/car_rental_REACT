
import { InputText, InputNumber } from '../../common/Input/Input'
import './NewCar.css'

export const NewCar = () => {

    return (
        <div className="container-fluid newCar">
          <div className='row upRow'>
          <InputText placeholder="Introduce the plate number" />
          <InputText placeholder="Introduce the model" />   
          <InputNumber placeholder="Introduce the year of manufacture" />   
          <InputText placeholder="Introduce the URL with the picture" /> 
          </div>
          <div className='row downRow'>
            <div className="buttonClicker" >Introduce car</div>
          </div>
        </div>
    )
}
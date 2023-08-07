
import { Input } from '../../common/Input/Input'
import './NewCar.css'

export const NewCar = () => {

    return (
        <div className="container-fluid newCar">
          <div className='row upRow'>
          <Input placeholder="Introduce the plate number" />
          <Input placeholder="Introduce the model" />   
          <Input placeholder="Introduce the year of manufacture" />   
          <Input placeholder="Introduce the URL with the picture" /> 
          </div>
          <div className='row downRow'>
            <div className="buttonClicker" >Introduce car</div>
          </div>
        </div>
    )
}
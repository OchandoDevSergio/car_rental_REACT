
import { Input } from '../../common/Input/Input'
import './NewCar.css'

export const NewCar = () => {

    return (
        <div className="container-fluid newCar">
          <div className='row upRow'>
          <Input 
            type={"text"}
            placeholder="Introduce the plate number"
            name={"plate_number"}
            className='defaultInput'
            onChange={(e)=> manejadora(e)}/>
          <Input 
            type={"text"}
            placeholder="Introduce the model"
            name={"model"}
            className='defaultInput'
            onChange={(e)=> manejadora(e)}/>   
          <Input 
            type={"number"}
            placeholder="Introduce the year of manufacture"
            name={"year"}
            className='defaultInput'
            onChange={(e)=> manejadora(e)}/>   
          <Input 
            type={"text"}
            placeholder="Introduce the URL with the picture"
            name={"picture"}
            className='defaultInput'
            onChange={(e)=> manejadora(e)}/> 
          </div>
          <div className='row downRow'>
            <div className="buttonClicker" >Introduce car</div>
          </div>
        </div>
    )
}
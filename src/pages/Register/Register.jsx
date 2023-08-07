import { Input } from '../../common/Input/Input'
import './Register.css'

export const Register = () => {

    return (
        <div className="container-fluid register">
          <div className='row upRowRegister'>
            <div className='col-1'></div>
            <div className='col-5'>
              <div className='row inputRow'>
                <Input placeholder="Introduce your name" />
              </div>
              <div className='row inputRow'>
                <Input placeholder="Introduce your surnames" />  
              </div>
              <div className='row inputRow'>
                <Input placeholder="Introduce your DNI" /> 
              </div>
              <div className='row inputRow'>
                <Input placeholder="Introduce your e-mail" />
              </div>
            </div>
            <div className='col-5'>
              <div className='row inputRow'>
                <Input placeholder="Introduce your phone number" />
              </div>
              <div className='row inputRow'>
                <Input placeholder="Introduce your password" />
              </div>
              <div className='row inputRow'>
                <Input placeholder="Repeat your password" />
              </div>
              <div className='row inputRow'></div>
            </div>
            <div className='col-1'></div> 
          </div>   
          <div className='row downRowRegister'>
            <div className="buttonClicker" >Register</div>
          </div>

        </div>
    )
}
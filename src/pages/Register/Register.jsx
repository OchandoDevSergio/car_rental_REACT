import { Input } from '../../common/Input/Input'
import './Register.css'

export const Register = () => {

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
                  onChange={(e)=> manejadora(e)}/>
              </div>
              <div className='row inputRow'>
                <Input 
                  type={"text"}
                  placeholder="Introduce your surnames"
                  name={"surnames"}
                  className='defaultInput'
                  onChange={(e)=> manejadora(e)}/>  
              </div>
              <div className='row inputRow'>
                <Input 
                  type={"text"}
                  placeholder="Introduce your DNI"
                  name={"DNI"}
                  className='defaultInput'
                  onChange={(e)=> manejadora(e)}/> 
              </div>
              <div className='row inputRow'>
                <Input
                  type={"email"}
                  placeholder="Introduce your e-mail"
                  name={"email"}
                  className='defaultInput'
                  onChange={(e)=> manejadora(e)} />
              </div>
            </div>
            <div className='col-5'>
              <div className='row inputRow'>
                <Input 
                  type={"number"}
                  placeholder="Introduce your phone number"
                  name={"phone_number"}
                  className='defaultInput'
                  onChange={(e)=> manejadora(e)} />
              </div>
              <div className='row inputRow'>
                <Input 
                  type={"password"}
                  placeholder="Introduce your password"
                  name={"password"}
                  className='defaultInput'
                  onChange={(e)=> manejadora(e)}/>
              </div>
              <div className='row inputRow'>
                <Input 
                  type={"password"}
                  placeholder="Repeat your password"
                  name={"password_repeat"}
                  className='defaultInput'
                  onChange={(e)=> manejadora(e)}/>
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
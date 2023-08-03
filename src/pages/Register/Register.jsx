import { InputMail, InputText, InputNumber } from '../../common/Input/Input'
import './Register.css'

export const Register = () => {

    return (
        <div className="register">
          <InputText placeholder="Introduce your name" />
          <InputText placeholder="Introduce your surnames" />   
          <InputText placeholder="Introduce your DNI" />   
          <InputMail placeholder="Introduce your e-mail" />   
          <InputNumber placeholder="Introduce your phone number" />   
          <InputText placeholder="Introduce your password" />   
          <InputText placeholder="Repeat your password" />   
          <div className="buttonClicker" >Register</div>


        </div>
    )
}
import { InputMail, InputText, InputNumber } from '../../common/Input/Input'
import './Register.css'

export const Register = () => {

    return (
        <div className="register">
          <InputText placeholder="Introduzca su nombre" />
          <InputText placeholder="Introduzca sus apellidos" />   
          <InputText placeholder="Introduzca su DNI" />   
          <InputMail placeholder="Introduzca su e-mail" />   
          <InputNumber placeholder="Introduzca su número de teléfono" />   
          <InputText placeholder="Introduzca su contraseña" />   
          <InputText placeholder="Repita su contraseña" />   
          <div className="buttonClicker" >Registrarse</div>


        </div>
    )
}
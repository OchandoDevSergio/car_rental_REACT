
import { useNavigate } from 'react-router-dom';
import './Header.css'

export const Header = () => {

    //Instanciamos useNavigate dentro de navigate para poder navegar
    const navigate = useNavigate();

    return (
        <div className='header'>
            <div className="buttonClicker" onClick={()=>navigate("/")}>Home</div>
            <div className="buttonClicker" onClick={()=>navigate("/login")}>Login</div>
            <div className="buttonClicker" onClick={()=>navigate("/register")}>Register</div>
        </div>
    )
}
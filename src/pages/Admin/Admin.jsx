import "./Admin.css";
import { useNavigate } from "react-router-dom";

export const Admin = () => {

    const navigate = useNavigate();

    return (
        <div className="adminDiv">
            <div className="buttonAdmin" onClick={() => navigate("/newcar")}>Add a new car</div>
            <div></div>
            <div className="buttonAdmin" onClick={() => navigate("/userslist")}>Users list</div>
        </div>
    );
}
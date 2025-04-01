import ncIcon from "./assets/NC-Logo.jpg"
import loginIcon from "./assets/Login-Icon.jpg"
import {Link} from 'react-router-dom'


const Header = () => {


    return (
        <div className='header-bar'>

       <Link to='./'>
       <img src={ncIcon} className="logo" alt="NC News Homepage" />
       </Link>

        <img src={loginIcon} className="login-icon" alt="Login" />
        </div>
    )

}

export {Header}


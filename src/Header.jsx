import ncIcon from "./assets/NC-Logo.jpg"
import loginIcon from "./assets/Login-Icon.jpg"


const Header = () => {


    return (
        <div className='header-bar'>
        <img src={ncIcon} className="logo" alt="NC News Homepage" />
        <img src={loginIcon} className="login-icon" alt="Login" />
        </div>
    )

}

export {Header}



        // <a href="https://react.dev" target="_blank">
        //   <img src={reactLogo} className="logo" alt="React logo" />
 import { useContext, useState } from "react";
 import { UserContext } from "./context/UserContext";






const Login = () => {

    const { username, setUsername } = useContext(UserContext);
    const [ usernameInput, setUsernameInput ] = useState('')


  const inputUsername = (e) => {
    setUsernameInput(e.target.value)
    }

    const switchUser = () => {
        setUsername(usernameInput)
    }
  

return (

    <div className='Login-page'>

    <h1>Login in here!</h1>


    

     <p>You are currently logged in as {username}</p>

     <div>
     <label>
     Username: <input className="user-name-input"  onChange={inputUsername} />
     </label>
     <br></br>
     <button onClick={switchUser}>Change to a different user</button>

     </div>
     </div>

)

}

export {Login}
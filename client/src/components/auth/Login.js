import React, {useState} from "react"
import {Link} from 'react-router-dom'
import * as auth from "./../../service/auth-service"

export default function Login (props) {

    const initialFormState = {username: "", password: ""}

    const [formState, updateState] = useState(initialFormState);

    function handleChange(event){
        const {name, value} = event.target;
        updateState({...formState, [name]: value});
    }

 
    function handleFormSubmit (event) {
        event.preventDefault();
        const { username, password } = formState;
     
        auth
          .login(username, password)
          .then(loggedInUser => {
            updateState(initialFormState);
            props.setLoggedInUser(loggedInUser);
            console.log("logged in user: ", loggedInUser)
            props.history.push("/home");
          })
          .catch(error => console.log(error));
      };

    return (
        <div>
            <div className="loginMamaDiv">
                <div className = "loginLeftDiv1"></div>
                <div className = "loginRightDiv">
                    <div className = "loginMasterDiv">
                        <h1 className="loginHead">Already have an<br></br> account?</h1>
                        <form className="loginForm" onSubmit={handleFormSubmit}>
                            <label>
                                <input class = "indexInput" placeholder = "Username" type="text" name="username" value={formState.username} onChange={handleChange} />
                            </label><br></br><br></br>
                    
                            <label>
                                <input class = "indexInput" placeholder = "Password" type="password" name="password" value={formState.password} onChange={handleChange} />
                            </label><br></br><br></br>
                    
                            <button class = "loginButton" type="submit"> Login </button>
                        </form><br></br>

                        <hr style = {{width: "30%"}}></hr>
                        <p className = "loginPar">Don't have an account yet?</p>
                        <div className = "loginFormDiv2">
                            <Link className = "signupButton" to={'/signup'} style={{ textDecoration: 'none', color: "black" }}> Signup</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
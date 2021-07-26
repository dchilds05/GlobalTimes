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
            <h1>
               Already have an account?
            </h1>

            <p>Log in</p>

            <form onSubmit={handleFormSubmit}>
                <label>
                    Username:
                    <input type="text" name="username" value={formState.username} onChange={handleChange} />
                </label><br></br>
        
                <label>
                    Password:
                    <input type="password" name="password" value={formState.password} onChange={handleChange} />
                </label><br></br>
        
                <button type="submit"> Login </button>
            </form>
 
            <p>
                Don't have account?
                <Link to={'/signup'}> Signup</Link>
            </p>
        </div>
    )
}
import React, {useState} from 'react'
import {signup, login} from "./../../service/auth-service"
import { Link } from 'react-router-dom';

function Signup(props){

    const initialFormState = {
        username: '',
        password: '',
        country: '',
    }

    const [formState, setFormState] = useState(initialFormState)

    function handleChange (event) {
        const {name, value} = event.target;
        setFormState({...formState, [name]: value});
      }

    function handleFormSubmit (event) {
        event.preventDefault();
        const {username, password, country} = formState;
       
        signup(username, password, country)
        .then(createdUser => {
            console.log("createdUser: ", createdUser);
            setFormState(initialFormState);
            props.history.push("/home");
        })
        .catch(error => console.log(error))
      }

    return(
        <div>
        <form onSubmit={handleFormSubmit}>
          <label>
          Username:
            <input type="text" name="username" value={formState.username} onChange={handleChange}/>
          </label><br></br>

        <label>
          Password:
            <input type="password" name="password" value={formState.password} onChange={handleChange}/>
        </label><br></br>
          
        <label>
          Country of residence:
            <input type="text" name="country" value={formState.passwcountryord} onChange={handleChange}/>
          </label><br></br>
   
          <button type="submit"> Signup </button>
        </form>
   
        <p>
          Already have an account?
          <Link to={"/"}> Login</Link>
        </p>
   
      </div>
    )
}

export default Signup
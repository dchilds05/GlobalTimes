import React, {useState, useEffect} from 'react'
import {signup} from "./../../service/auth-service"
import { Link } from 'react-router-dom';
import photoSlideshow from "./../../middleware/photoSlideshow"

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

    useEffect(() => {
      photoSlideshow();
    }, [])

    return(
      <div>
            <div className="loginMamaDiv">
                <div id = "loginLeftDiv1"></div>
                <div className = "loginRightDiv">
                    <div className = "loginMasterDiv">
                        <h1 className="loginHead">Signup</h1>
                        <form className="loginForm" onSubmit={handleFormSubmit}>
                            <label>
                                <input class = "indexInput" placeholder = "Username" type="text" name="username" value={formState.username} onChange={handleChange} required/>
                            </label><br></br><br></br>
                    
                            <label>
                                <input class = "indexInput" placeholder = "Password" type="password" name="password" value={formState.password} onChange={handleChange} required/>
                            </label><br></br><br></br>

                            <label>
                                <input class = "indexInput" placeholder = "Country of residence" type="text" name="country" value={formState.country} onChange={handleChange} required/>
                            </label><br></br><br></br>
                    
                            <button class = "loginButton" type="submit"> Submit </button>
                        </form><br></br>

                        <hr style = {{width: "30%"}}></hr>
                        <p className = "loginPar">Already have an account?</p>
                        <div className = "loginFormDiv2">
                            <Link className = "signupButton" to={'/'} style={{ textDecoration: 'none', color: "black" }}> Login</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup
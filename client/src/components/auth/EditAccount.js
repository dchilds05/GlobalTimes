import React, {useState} from 'react'
import {editUser, deleteUser} from "./../../service/edit-user-service"
import {logout} from "./../../service/auth-service"

function EditUser(props){

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
       
        editUser(username, password, country)
        .then(updatedUser => {
            console.log("updatedUser: ", updatedUser);
            logout();
            props.setLoggedInUser(null);
            props.history.push("/");
        })
        .catch(error => console.log(error))
      }

      function deleteFn() {
        deleteUser();
        props.setLoggedInUser(null);
        props.history.push("/");
      }

    return(
      <div>
            <div className="loginMamaDiv">
                <div id = "editUserLeftDiv"></div>
                <div className = "loginRightDiv">
                    <div className = "loginMasterDiv">
                        <h1 className="loginHead">Edit User</h1>
                        <form className="loginForm" onSubmit={handleFormSubmit}>
                            <label>
                                <input class = "indexInput" placeholder = {props.loggedInUser.username} type="text" name="username" value={formState.username} onChange={handleChange} required/>
                            </label><br></br><br></br>
                    
                            <label>
                                <input class = "indexInput" placeholder = "****" type="password" name="password" value={formState.password} onChange={handleChange} required/>
                            </label><br></br><br></br>

                            <label>
                                <input class = "indexInput" placeholder = {props.loggedInUser.country} type="text" name="country" value={formState.country} onChange={handleChange} required/>
                            </label><br></br><br></br>
                    
                            <button class = "loginButton" type="submit"> Update User </button>
                        </form><br></br>

                        <hr style = {{width: "30%"}}></hr>
                        <p style={{color: "red"}} className = "loginPar">Delete Account</p>
                        <div className = "loginFormDiv2" style={{border: "none", background: "none"}}>
                            <button style={{color: "red", border: "1px solid red"}} id= "deleteButton" className="signupButton" onClick={() => deleteFn()}> Delete Account </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditUser;
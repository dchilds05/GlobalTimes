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
        <form onSubmit={handleFormSubmit}>
          <label>
          Username:
            <input type="text" name="username" placeholder={props.loggedInUser.username} value={formState.username} onChange={handleChange} required/>
          </label><br></br>

        <label>
          Password:
            <input type="password" name="password" placeholder="****" value={formState.password} onChange={handleChange} required/>
        </label><br></br>
          
        <label>
          Country of residence:
            <input type="text" name="country" placeholder={props.loggedInUser.country} value={formState.passwcountryord} onChange={handleChange} required/>
          </label><br></br>
   
          <button type="submit"> Update User </button>
        </form><br></br>

        <button onClick={() => deleteFn()}> Delete Account </button>
   
   
      </div>
    )
}

export default EditUser;
import './App.css';
import React, {useState, useEffect} from "react"
import {BrowserRouter, Switch, Route} from "react-router-dom"
import * as auth from "./service/auth-service"
import Login from "./components/auth/Login"
import NavBar from "./components/navbar/NavBar"


function App() {

  const initialLoginState = null;
  const [loggedInUser, setLoggedInUser] = useState(initialLoginState)

  useEffect(() => {
    const response = auth.isLoggedIn()
    if(response._id) setLoggedInUser(response)
    else setLoggedInUser(initialLoginState)
  }, [loggedInUser])

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar loggedInUser={loggedInUser}/>
        <Switch>
          <Route exact path = "/" render={props => <Login {...props} setLoggedInUser={setLoggedInUser}/>}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

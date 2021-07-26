import './App.css';
import React, {useState, useEffect} from "react"
import {BrowserRouter, Switch, Route} from "react-router-dom"
import * as auth from "./service/auth-service"
import Login from "./components/auth/Login"
import NavBar from "./components/navbar/NavBar"
import Home from "./components/sitePages/Home"


function App() {

  const initialLoginState = null;
  const [loggedInUser, setLoggedInUser] = useState(initialLoginState)

  useEffect(() => {
    auth.isLoggedIn()
    .then((user) => {
      console.log("user: ", user)
      if(user._id) setLoggedInUser(user)
    })
    
  }, [])

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar loggedInUser={loggedInUser}/>
        <Switch>
          <Route exact path = "/" render={props => <Login {...props} setLoggedInUser={setLoggedInUser}/>}/>
          <Route exact path = "/home" component={Home}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

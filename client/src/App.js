import './App.css';
import React, {useState, useEffect} from "react"
import {BrowserRouter, Switch, Route, Redirect} from "react-router-dom"
import * as auth from "./service/auth-service"
import Login from "./components/auth/Login"
import Signup from "./components/auth/Signup"
import EditUser from "./components/auth/EditAccount"
import NavBar from "./components/navbar/NavBar"
import Home from "./components/sitePages/Home"
import Country from "./components/sitePages/Country"


function App() {

  const [loggedInUser, setLoggedInUser] = useState(null)
  const [atricleId, setArticlId] = useState("")

  useEffect(() => {
    auth.isLoggedIn()
    .then((user) => {
      if(user._id) setLoggedInUser(user)
    })
    
  }, [])

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar loggedInUser={loggedInUser} setLoggedInUser={setLoggedInUser}/>
        <Switch>
          <Route exact path = "/" render={props => 
            !loggedInUser ? <Login {...props} setLoggedInUser={setLoggedInUser}/> : <Redirect to="/home"/>
            }/>
          <Route exact path = "/signup" render={props => 
            !loggedInUser ? <Signup {...props} setLoggedInUser={setLoggedInUser}/> : <Redirect to="/home"/>
            }/>
          <Route exact path = "/home" render={props => (
            loggedInUser ? <Home {...props} loggedInUser={loggedInUser}/> : <Redirect to="/"/>
            )}/>
          <Route exact path = "/editUser" render={props => (
            loggedInUser ? <EditUser {...props} loggedInUser={loggedInUser} setLoggedInUser={setLoggedInUser}/> : <Redirect to="/"/>
            )}/>
          <Route exact path = "/country/:name" render={props => (
            loggedInUser ? <Country {...props} loggedInUser={loggedInUser} atricleId={atricleId} setArticlId={setArticlId}/> : <Redirect to="/"/>
            )}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

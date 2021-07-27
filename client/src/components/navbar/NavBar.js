import React, {useState} from "react"
import {Link} from "react-router-dom"
import * as auth from "./../../service/auth-service"

export default function NavBar(props) {

    const [state, setState] = useState([])

    let displayName = "";

    if(props.loggedInUser){
        for(let i=0; i<props.loggedInUser.username.length; i++){
            if(i===0) displayName += props.loggedInUser.username[i].toUpperCase();
            else {displayName += props.loggedInUser.username[i]}
        }
    }

    function logOut(){
        auth.logout()
        .then((message) => {
           console.log(message);
           setState(...state);
        })
    }

    function popOutRight(){
        var userBurger = document.querySelector(".rightBurgerBar");
        if (userBurger.style.display === "block") {
            userBurger.style.display = "none";
          } else {
            userBurger.style.display = "block";
          }
    }


    return (

        <div className="navBar">
            <div className= "navDiv1">
                <img className = "navImg1" src="./hamburger.png" alt="hamburger"/>
            </div>

            <div className= "navDiv2">
                <h1>Global Times</h1>
            </div>
           
            <div className= "navDiv3">
                <img onClick={() => popOutRight()} className = "navImg2" src="./userPhoto.png" alt="user"/>
                <div className="navRightSmallDiv">
                    {props.loggedInUser && <p className= "navPar">{displayName}</p>}
                </div>
                <ul className="rightBurgerBar" style={{display: "none"}}> 
                    <li><Link to="/editUser">Edit Account Details</Link></li>
                    <li onClick={() => logOut()}>Logout</li>
                </ul>
                
            </div>
        </div>
    )
}
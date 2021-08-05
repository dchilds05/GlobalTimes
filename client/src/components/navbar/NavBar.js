import React from "react"
import {Link} from "react-router-dom"
import * as auth from "./../../service/auth-service"

export default function NavBar(props) {

    let displayName = "";

    if(props.loggedInUser){
        for(let i=0; i<props.loggedInUser.username.length; i++){
            if(i===0) displayName += props.loggedInUser.username[i].toUpperCase();
            else {displayName += props.loggedInUser.username[i]}
        }
    }

    function logOut(){
        auth.logout()
        .then((data) => {
           console.log(data.message);
           popOutRight();
           props.setLoggedInUser(null);
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

    function popOutLeft(){
        var userBurger = document.querySelector(".leftBurgerBar");
        if (userBurger.style.display === "block") {
            userBurger.style.display = "none";
          } else {
            userBurger.style.display = "block";
          }
    }

    function displayLeft(){
        var userBurger = document.querySelector(".leftBurgerBar");
        userBurger.style.display = "block";
    }

    function UnDisplayLeft(){
        var userBurger = document.querySelector(".leftBurgerBar");
        userBurger.style.display = "none";
    }

    function displayRight(){
        var userBurger = document.querySelector(".rightBurgerBar");
        userBurger.style.display = "block";
    }

    function UnDisplayRight(){
        var userBurger = document.querySelector(".rightBurgerBar");
        userBurger.style.display = "none";
    }


    return (

        <div className="navBar">
            <div className= "navDiv1" onMouseOver= {() => displayLeft()} onMouseOut= {() => UnDisplayLeft()}>
                <img onClick={() => popOutLeft()} className = "navImg1" src="./hamburger.png" alt="hamburger"/>
                <ul className="leftBurgerBar" style={{display: "none"}}> 
                    <Link to="/home" style={{ textDecoration: 'none', color: "black" }}><li onClick={() => popOutLeft()}>Home</li></Link>
                    <Link to="/savedArticles" style={{ textDecoration: 'none', color: "black" }}><li onClick={() => popOutLeft()}>My Saved Articles</li></Link>
                    <Link to="/Africa" style={{ textDecoration: 'none', color: "black" }}><li onClick={() => popOutLeft()}>Africa</li></Link>
                    <Link to="/Asia" style={{ textDecoration: 'none', color: "black" }}><li onClick={() => popOutLeft()}>Asia</li></Link>
                    <Link to="/Europe" style={{ textDecoration: 'none', color: "black" }}><li onClick={() => popOutLeft()}>Europe</li></Link>
                    <Link to="/North%20America" style={{ textDecoration: 'none', color: "black" }}><li onClick={() => popOutLeft()}>North America</li></Link>
                    <Link to="/South%20America" style={{ textDecoration: 'none', color: "black" }}><li onClick={() => popOutLeft()}>South America</li></Link>
                </ul>
            </div>

            <div className= "navDiv2">
                <Link to="/home"><img className="logo" src="./logo.png" alt="logo" /></Link>
            </div>
           
            <div className= "navDiv3" onMouseOver= {() => displayRight()} onMouseOut= {() => UnDisplayRight()}>
                <img onClick={() => popOutRight()} className = "navImg2" src="./userPhoto.png" alt="user"/>
                <div className="navRightSmallDiv" >
                    {props.loggedInUser && <p className= "navPar">{displayName}</p>}
                </div>
                <ul className="rightBurgerBar" style={{display: "none"}}> 
                    <Link to="/editUser" style={{ textDecoration: 'none', color: "black" }}><li onClick={() => popOutRight()}>Edit Account Details</li></Link>
                    <li onClick={() => logOut()} >Logout</li>
                </ul>
            </div>
        </div>
    )
}
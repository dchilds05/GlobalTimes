import React from "react"

export default function NavBar(props) {
    return (

        <div className="navBar">
            <div className= "navDiv1">
                <img className = "navImg1" src="./hamburger.png" alt="hamburger"/>
            </div>

            <div className= "navDiv2">
                <h1>Global Times</h1>
            </div>
           
            <div className= "navDiv3">
                {props.loggedInUser && <p classname= "navPar">{props.loggedInUser}</p>}
                <img className = "navImg2" src="./userPhoto.png" alt="user"/>
            </div>
        </div>
    )
}
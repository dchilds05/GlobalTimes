import React from "react"

export default function NavBar(props) {

    let displayName = "";

    if(props.loggedInUser){
        for(let i=0; i<props.loggedInUser.username.length; i++){
            if(i===0) displayName += props.loggedInUser.username[i].toUpperCase();
            else {displayName += props.loggedInUser.username[i]}
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
                <img className = "navImg2" src="./userPhoto.png" alt="user"/>
                <div className="navRightSmallDiv">
                    {props.loggedInUser && <p className= "navPar">{displayName}</p>}
                </div>
                
            </div>
        </div>
    )
}
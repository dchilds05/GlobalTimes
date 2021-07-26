import React from "react"

export default function NavBar(props) {

    /*if(props.loggedInUser.username){
        const capitalizedName = {...props.loggedInUser.username}};
        capitalizedName[0].toUpperCase();
        console.log(capitalizedName);
    }*/

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
                    {props.loggedInUser && <p className= "navPar">{props.loggedInUser.username}</p>}
                </div>
                
            </div>
        </div>
    )
}
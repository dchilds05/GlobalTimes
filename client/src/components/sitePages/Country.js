import React, {useState, useEffect} from "react";
import {apiCall} from "./../../service/api-service"


export default function Country(props) {

    const countryName = props.match.params.name;
    const country = countryName.toLowerCase();

    console.log("state: ", props.articlesArr)

    //HOW DO I GET THE RETURN TO RENDER AFTER I RECEIVE THE RESULTS OF AN API CALL? HERE I HAVE CALLED THE API FROM THE PREVIOUS PAGE, RENDERING THIS PAGE WITHIN THE .THEN, BUT STILL NOT DISPLAYING RESULTS EVEN THOUGH CONSOLE LOG SHOWS RESULTS COMING IN. WHAT DO I DO?
        return (
            <div>
                {props.articlesArr && props.articlesArr.map( article => {
                    <div>
                        <a href={`${article.web_url}`}>
                            <h1>{article.headline.main}</h1>
                            <img src={article.multimedia[0]} alt="nothing" />
                            <p>{article.abstract}</p>
                            <div>
                                <p>Category: {article.section_name}</p>
                                <p>Publication Date: {article.pub_date}</p>
                            </div>
                        </a>
                    </div>
                })}
            </div>
        )
    
}

import React, {useState, useEffect} from "react";
import PrintResults from "./PrintResults"
import axios from 'axios';
const apiKey = process.env.APIKEY || "zIAVHGhXDlbB9bHGAkgmKitNUXY7VAn7";


export default function SavedArticles(props) {

    let savedArticles = props.loggedInUser.savedArticles

    const[singleArticleArr, setSingleArticleArr] = useState([])


    savedArticles.map((url) => {
        console.log("url: ", url)

        axios.get(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${url}&api-key=${apiKey}`)
        .then((result) => {
            setSingleArticleArr(result.data.response.docs)
        })
        .then(() => {
            return (
                <div className="countryMamaDiv">
                    <div className="countryChildDivLeft">
                        <h1>My Saved Events</h1>
                        <div className="countryChildDivLeft">
                            {singleArticleArr && <PrintResults array={singleArticleArr}/>}
                        </div>
                    </div>
                </div>
            )
        })
        .catch(err=>console.log(err))
    })
}

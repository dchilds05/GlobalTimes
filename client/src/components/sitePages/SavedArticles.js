import React, {useState, useEffect} from "react";
import PrintResults from "./PrintResults"
import axios from 'axios';
const apiKey = process.env.APIKEY || "zIAVHGhXDlbB9bHGAkgmKitNUXY7VAn7";


export default function SavedArticles(props) {

    let savedArticles = props.loggedInUser.savedArticles

    const [articlesList, setArticlesList] = useState([])

    const testUrl = "https://www.nytimes.com/2021/07/24/sports/olympics/tennis-ashleigh-barty-eliminated.html"

    useEffect(() => {
        axios.get(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${testUrl}&api-key=${apiKey}`)
        .then((results) => {
            setArticlesList(results.data.response.docs)
        })
        .catch(err=>console.log(err))
    }, [])

        return (
        <div>
            <h1>My Saved Articles</h1>
            <div>
                {articlesList && <PrintResults array={articlesList}/>}
            </div>
        </div>
        )

}

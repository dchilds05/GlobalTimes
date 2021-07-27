import React, {useState, useEffect} from "react";
import axios from 'axios';
const apiKey = process.env.APIKEY || "zIAVHGhXDlbB9bHGAkgmKitNUXY7VAn7";


export default function Country(props) {

    const [countryArr, updateCountryArr] = useState([])

    const countryName = props.match.params.name;
    const country = countryName.toLowerCase();

    useEffect(() => {
        axios.get(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${country}&api-key=${apiKey}`)
        .then((results) => {
            updateCountryArr(results.data.response.docs)
            console.log("result: ", results.data.response.docs[0].multimedia[0])
        })
        .catch(err=>console.log(err))
    }, [])
    
        return (
            <div>
                {countryArr && countryArr.map( article => {
                    return <div>
                        <a href={`${article.web_url}`} style={{ textDecoration: 'none', color: "black" }}>
                            <h1>{article.headline.main}</h1>
                            {article.multimedia[0] && <img src={`https://static01.nyt.com/${article.multimedia[0].url}`} alt="nothing" />}
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

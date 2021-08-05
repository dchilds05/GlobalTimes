import React, {useState, useEffect} from "react";
import PrintResults from "./PrintResults"
import axios from 'axios';
const apiKey = process.env.APIKEY || "zIAVHGhXDlbB9bHGAkgmKitNUXY7VAn7";


export default function Country(props) {

    const [countryArr, updateCountryArr] = useState([])
    const [countryArr2, updateCountryArr2] = useState([])

    const countryName = props.match.params.name;
    const country = countryName.toLowerCase();

    useEffect(() => {
        axios.get(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${country}&fq=glocations:(${country})&page=1&sort=newest&api-key=${apiKey}`)
        .then((results) => {
            updateCountryArr(results.data.response.docs)
        })
        .catch(err=>console.log(err))
    }, [countryName])

    useEffect(() => {
        axios.get(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${country}&fq=glocations:(${country})&page=2&sort=newest&api-key=${apiKey}`)
        .then((results) => {
            updateCountryArr2(results.data.response.docs)
        })
        .catch(err=>console.log(err))
    }, [countryName])
    
        return (
            <div className="countryMamaDiv">
                <div className="countryChildDivLeft">
                    {countryArr && <PrintResults array={countryArr}/>}
                </div>
                <div className="countryChildDivRight">
                    {countryArr2 && <PrintResults array={countryArr2}/>}
                </div>
            </div>
        )
}

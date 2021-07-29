import React, {useEffect, useState} from "react";
import * as am4core from "./../../../node_modules/@amcharts/amcharts4/core";
import * as am4maps from "./../../../node_modules/@amcharts/amcharts4/maps";
import am4geodata_worldHigh from "./../../../node_modules/@amcharts/amcharts4-geodata/worldHigh";
import PrintResults from "./PrintResults"
import axios from 'axios';
const apiKey = process.env.APIKEY || "zIAVHGhXDlbB9bHGAkgmKitNUXY7VAn7";


export default function Home(props) {
    
    useEffect(() => {
        // Create map instance
        var chart = am4core.create("chartDiv", am4maps.MapChart);
        // Set map definition
        chart.geodata = am4geodata_worldHigh;
        // Set projection
        chart.projection = new am4maps.projections.Orthographic();
        // Create map polygon series
        var polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());
        // Make map load polygon (like country names) data from GeoJSON
        polygonSeries.useGeodata = true;
        // Configure series
        let polygonTemplate = polygonSeries.mapPolygons.template;
        //Click Event
        polygonTemplate.events.on("hit", function(ev) {
            ev.target.series.chart.zoomToMapObject(ev.target);
            setTimeout(() => {
                props.history.push(`/${ev.target.dataItem.dataContext.name}`);
            }, 750)
          });
        polygonTemplate.tooltipText = "{name}";
        polygonTemplate.fill = am4core.color("#74B266");
        // Create hover state and set alternative fill color
        let hs = polygonTemplate.states.create("hover");
        hs.properties.fill = am4core.color("#367B25");
        //zoom controls
        chart.zoomControl = new am4maps.ZoomControl();
        chart.zoomControl.slider.height = 100;
        //setting map center
        chart.deltaLongitude = 0;
        chart.deltaLatitude = -30; 
        //enable grid on map
        let grid = chart.series.push(new am4maps.GraticuleSeries());
        grid.toBack();
        //rotate map
        chart.panBehavior = "rotateLongLat";
        /* CUSTOMIZE GRID LINES
        grid.mapLines.template.line.stroke = am4core.color("#e33");
        grid.mapLines.template.line.strokeOpacity = 0.2;
        grid.longitudeStep = 20;
        grid.latitudeStep = 20;*/
        //BACKGROUND COLOR
        //chart.backgroundSeries.mapPolygons.template.polygon.fill = am4core.color("#aadaff");
        //chart.backgroundSeries.mapPolygons.template.polygon.fillOpacity = 1;
    }, [])

    const [countryArr, updateCountryArr] = useState([])
    const countryName = props.loggedInUser.country;
    const country = countryName.toLowerCase();

    useEffect(() => {
        axios.get(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${country}&fq=glocations:(${country})&page=1&sort=newest&api-key=${apiKey}`)
        .then((results) => {
            updateCountryArr(results.data.response.docs)
        })
        .catch(err=>console.log(err))
    }, [])

    return (
        <div className = "homeMamaDiv">
            <div className = "homeLeftDiv">
                <h3>NEWS FROM {countryName.toUpperCase()}</h3>
                <div className="scrollBar">{countryArr && <PrintResults array={countryArr}/>}</div>
            </div>
            <div className = "homeRightDiv">
                <h1>Search news from around the world!</h1>
                <div id="chartDiv"></div>
                <h2 className= "homeH2">Browse the New York Times database for recent articles from your country of choice</h2>
            </div>
        </div>
    )
}



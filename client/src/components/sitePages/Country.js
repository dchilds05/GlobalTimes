import React, {useEffect} from "react";
import countries from "./../../../node_modules/@amcharts/amcharts4-geodata/data/countries";
import * as am4core from "./../../../node_modules/@amcharts/amcharts4/core";
import * as am4maps from "./../../../node_modules/@amcharts/amcharts4/maps";


export default function Country(props) {

    const countryName = props.match.params.name
    const countryId = props.countryObject
    const am4geodata_country = require(`./../../../node_modules/@amcharts/amcharts4-geodata/${countries.countryId[1]}`);

    useEffect(() => {

        // Create map instance
        var chart = am4core.create("chartDiv", am4maps.MapChart);

        // Set map definition
        chart.geodata = am4geodata_country;

        // Set projection
        chart.projection = new am4maps.projections.Orthographic();

    }, []);
 



    return (
        <div>
            <h1>{countryName}</h1>
            <div id="chartDiv"></div>
        </div>
    )
}
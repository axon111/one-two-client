import React, {useState, useEffect} from 'react';
import { useParams } from "react-router-dom"
import axios from "axios";
import useAxios from "../hooks/useAxios";
import { API_URL } from "../constants";

function McuHero() {

    const { name } = useParams();

    const [setUrl, data, loading, setLoading, error] = useAxios();

    useEffect(
        () => {
            setUrl(API_URL + "/oneMcuCharacter/"+name);
            console.log("API URL is:" + API_URL + "/oneMcuCharacter/"+name)
            setLoading(true);
        },
        []
     );

    
    return ( 

        <>
            <h1> Hero: {name}</h1>

           { (!loading && data) 
            ?
            <>
            <h2>Movie debut: {data.payload[0].debut}</h2>
            <h2>Debut year: {data.payload[0].debutYear}</h2>
            </>
            :
            <h1>loading...</h1>
           }
        </>
     );
}

export default McuHero;

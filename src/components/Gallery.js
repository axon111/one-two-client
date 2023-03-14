
import React, {useState, useEffect} from 'react';
import axios from "axios";
import useAxios from "../hooks/useAxios";
import { API_URL } from "../constants";
import { Link } from "react-router-dom";

function Gallery () {


   const [setUrl, data, loading, setLoading, error] = useAxios();

     useEffect(
        () => {
            setUrl(API_URL + "/allCharacters");
            console.log("API URL is:" + API_URL)
            setLoading(true);
        },
        []
     );


    return ( 
        <>
            <h1>Gallery</h1>

            {console.log(data)}
            {
                    (!loading && data) ?
                    data.payload.map(
                        (mcuHero) => 
                            <li>
                                {/* <Link to={`/getOneMcuCharacter/${mcuHero.name}`} > */}

                                <Link to={
                                    {
                                    pathname: `/getOneMcuCharacter/${mcuHero.name}`,
                                    state: "hello world"
                                    }
                                }>
                                {mcuHero.name} 
                                </Link> 
                                
                            </li>
                        )
                    
                    //<h1>All Good</h1>
                    :
                    <h1>Loading...</h1>

      }

        </>
     );
}

export default Gallery ;
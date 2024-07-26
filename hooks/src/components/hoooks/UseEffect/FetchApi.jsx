import { useEffect, useState } from "react";

const FetchApi = () => {

    const [apiData, setApiData] = useState(null);

    const API = 'https://pokeapi.co/api/v2/pokemon/pikachu';

    const fetchApiData = () => {
        fetch(API)
            .then((response) => response.json())
            .then((data) =>
                setApiData(data))
            .catch((err) => {
                console.log(err);
            })
    }

    useEffect(() => {
        fetchApiData();
    }, [])

    console.log(apiData);

    if (apiData) {
        return (
            <div className="container">
                <h1> Pokemon Card </h1>
                <ul className="card">
                  <li>
                    <figure>
                        <img 
                        src={apiData.sprites.other.dream_world.front_default}
                        alt={apiData.name}
                        />
                    </figure>
                    <h1> {apiData.name} </h1>
                  </li>
                </ul>
            </div>
        )
    }
}


export default FetchApi;
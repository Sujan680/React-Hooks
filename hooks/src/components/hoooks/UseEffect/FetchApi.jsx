import { useEffect, useState } from "react";

const FetchApi = () => {

    const [apiData, setApiData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    const API = 'https://pokeapi.co/api/v2/pokemon/pikachu';

    const fetchApiData = () => {
        fetch(API)
            .then((response) => response.json())
            .then((data) => {
                setApiData(data);
                setLoading(false)
            })
            .catch((err) => {
                console.log(err);
                setError(error)
                setLoading(false);
            });
    };

    useEffect(() => {
        fetchApiData();
    }, [] )


    if (loading) {
        return (
            <div>
                <h1>Loading...</h1>
            </div>
        )
    }


    if(error){
        return(
            <div>
                <h2> Error: {error.message} </h2>
            </div>
        )
    }
    // console.log(apiData);

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


export default FetchApi;
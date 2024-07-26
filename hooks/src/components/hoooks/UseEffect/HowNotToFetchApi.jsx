import { useState } from "react";

const HowNotToFetchApi = () => {

    const [apiData, setApiData] = useState([]);

    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.json())
    .then((data) => 
       setApiData(data))
    .catch((err) => {
        console.log(err);
    })
  return (
    <div>
       <ul>
             data: 
             {
                apiData.map((curData) => {
                    return <li key={curData.id}> {curData.title} </li>
                })
             }
       </ul>

    </div>
  )
}

export default HowNotToFetchApi;
import { useEffect, useState } from "react"

const FetchDataComponent = () => {

    const [data, setData] = useState([]);
    const [error, setError] = useState(null);

    async function fetchData(){
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts');
            if(!response.ok){
                throw new Error("Error occured while fetching data")
            }
            const result = await response.json();
            console.log(result);
            setData(result)
        } catch (error) {
            console.log(error);
            setError(error.message)
        }
    }

    useEffect(() => {
        fetchData();
    }, [])

    if(error){
        return(
            <div> Error occured... </div>
        )
    }

  return (

    <div>
        <h2>This is fetching API data examples</h2>
        <ul style={{
            listStyle: 'none',
        }}>
            {
                data.map((item) => (
                    <li
                    style={{
                        border: '1px solid red',
                        padding: '10px',
                        textAlign: 'center'
                    }}
                     key={item.id}> {item.title} </li>
                ))
            }
        </ul>
    </div>
  )
}

export default FetchDataComponent
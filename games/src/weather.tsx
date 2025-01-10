import {useEffect, useState} from "react";

export default function Weather()
{
    const[address, setAddress] = useState('');
    const [prevSearch, setPrevSearch] = useState('');
    const[results, setResults] =useState([]);
    const[coordinates, setCoordinates] = useState<{longitude: number; latitude: number} | null>(null);

    useEffect(() => {
        fetch('https://api.geoapify.com/v1/geocode/search?text='+[address]+'=json&apiKey=b8568cb9afc64fad861a69edbddb2658')
                .then((response) => response.json())
                .then((data) => {
                   setCoordinates({
                        longitude: data.results[0].lon,
                        latitude: data.results[0].lat
                    });
                    console.log('Longitude:', data.results[0].lon);
                    console.log('Latitude:', data.results[0].lat);
                })

                .catch((error) => console.log(error));
            setPrevSearch(address);
        }, [address]);



    return (
        <>
            <div>

                <h1 style = {{fontFamily: "Courier New"}}> Weather</h1>
                <div style={{justifyContent: "center", margin: "auto"}}>
                    <input
                        type="text"
                        style={{ textAlign:"center",justifyContent:"center", backgroundColor: 'lightblue', border: '1px round gray' }}
                        onChange={(e) => setAddress(e.target.value)}
                        value={address}
                        placeholder = "Search a location"
                    />
                </div>
                <button onClick={Weather}>Search</button>


            </div>
        </>
    );
}



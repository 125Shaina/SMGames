import {useEffect, useState} from "react";

export default function Githubsearch()
{
    const[search, setSearch] = useState('');
    const [prevSearch, setPrevSearch] = useState('');
    const[results, setResults] =useState([]);

function handleSearchButton() {
    <h1 style={{fontFamily: "Courier New"}}>{search}</h1>

    if (prevSearch !== search) {
        fetch("https://api.github.com/search/users?q=" + search + "%20in:login")
            .then((response) => response.json())
            .then((data) => {
                setResults(data.items);
                console.log(data);
            })

            .catch((error) => console.log(error));
        setPrevSearch(search);
    }

}

    return (
        <>
            <div style={{justifyContent:"center", margin: "auto"}}>

                API Github
                <input
                    type="text"
                    style={{ backgroundColor: 'lightblue', border: '1px round gray' }}
                    onChange={(e) => setSearch(e.target.value)}
                    value={search}
                    placeholder = "Search for GitHub Users"
                    />
                <button onClick={handleSearchButton}>Search</button>


            </div>
            { // @ts-ignore
                results.map(item => <div><img style = {{height: "100px", width: "100px", borderRadius: "3rem", padding:"5px", width:"100px",margin:"auto"}} src = {item.avatar_url}/><div style={{fontFamily: "Courier New", display:"flex"}}> {item.login}</div></div>)
            }
        </>
    );
}



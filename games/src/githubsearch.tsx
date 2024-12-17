import {useEffect, useState} from "react";

export default function Githubsearch()
{
    const[search, setSearch] = useState('fhs');
    const [prevSearch, setPrevSearch] = useState('');
    const[results, setResults] =useState([]);
    useEffect(() => {
        if(prevSearch !== search) {
            fetch("https://api.github.com/search/users?q=" + search + "%20in:login")
                .then((response) => response.json())
                .then((data) => {
                    setResults(data.items);
                    console.log(data);
                })
                .catch((error) => console.log(error));
            setPrevSearch(search);
        }
    }, []);

    return (
        <>
            <div>
                API Github Search
            </div>
            { // @ts-ignore
                results.map(item => <div><img style = {{height: "100px", width: "100px"}} src = {item.avatar_url}/>{item.login}</div>)
            }
        </>
    );
}



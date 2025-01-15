import {useEffect, useState} from "react";

export default function Weather() {
    interface WeatherData {
        name: string;
        startTime: string;
        temperature: number;
        temperatureUnit: string;
        shortForecast: string;
        detailedForecast: string;
        icon: string;
        probabilityOfPrecipitation: { value: number  };
    }
    const defaultAddress = "2 Robertsville Rd, Freehold, NJ";
    const ApiKey = "b8568cb9afc64fad861a69edbddb2658";

    const [address, setAddress] = useState<string>(defaultAddress);
    const[coordinates, setCoordinates] = useState<{longitude: number; latitude: number}>();
//                                                        x                  y
    const [forecastUrl, setForecastUrl] = useState('');
    const [weatherData, setWeatherData] = useState<WeatherData[]>([]);
    const [lastUpdated, setLastUpdated] = useState<string>("");
    const [inputValue, setInputValue] = useState<string>(defaultAddress);

    useEffect(() =>
    {
        if (address)
        {
            fetch(
                `https://api.geoapify.com/v1/geocode/search?text=${address}&format=json&apiKey=${ApiKey}`
            )
                .then((response) => response.json())
                .then((data) =>
                {
                    if (data.results && data.results.length > 0)
                    {
                        const lon = data.results[0].lon;
                        const lat = data.results[0].lat;
                        setCoordinates({longitude: lon, latitude: lat});
                    }
                    else
                    {
                        console.error("No coordinates found for the provided address.");
                    }
                })
        }
    }, [address]);
    useEffect(() =>
    {
        if (coordinates)
        {
            const lat = coordinates.latitude;
            const lon = coordinates.longitude;
            const weatherGovUrl = `https://api.weather.gov/points/${lat}%2C${lon}`;
            console.log("getting weather data from:", weatherGovUrl);

            fetch(weatherGovUrl)
                .then((response) => response.json())
                .then((data) =>
                {
                    console.log("Weather.gov Points API Response:", data);
                    if (data.properties && data.properties.forecast)
                    {
                        setForecastUrl(data.properties.forecast);
                    }
                    else
                    {
                        console.error("No forecast available for these coordinates.");
                    }
                })
        }
    }, [coordinates]);
    useEffect(() =>
    {
        if (forecastUrl)
        {
            fetch(forecastUrl)
                .then((response) => response.json())
                .then((data) =>
                {
                    if (data.properties && data.properties.periods)
                    {
                        setWeatherData(data.properties.periods);
                        setLastUpdated(data.properties.updateTime);
                    } else
                    {
                        console.error("No weather data found at the URL.");
                    }
                })
        }
    }, [forecastUrl]);
    const handleButtonClick = () =>
    {
        setAddress(inputValue);
    }
    return (
        <div style={{backgroundColor: '#BBD4F9', padding: "0%"}}>
            <div style={{fontFamily: "Arial, sans-serif", margin: "20px"}}>
                <div style={{paddingTop: "20px"}}>
                    <input
                        type="text"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        placeholder="Search for a location "
                        style={{padding: "8px", width: "60%"}}
                    />
                    <button
                        onClick={handleButtonClick}
                        style={{
                            padding: "8px 16px",
                            marginLeft: "10px",
                            backgroundColor: "blueviolet",
                            border: "none"
                        }}
                    >
                        Get Weather
                    </button>
                </div>
                <h1>Forecast for {address}</h1>
                {lastUpdated && <p>Last updated on {lastUpdated}</p>}
                <div>
                    {weatherData.map((day, index) => (
                        <div
                            key={index}
                            style={{paddingTop: '10px'}}
                        >
                            <h3>{day.name}</h3>
                            <div style={{
                                border: "none",
                                borderRadius: "8px",
                                paddingBottom: "10px",
                                paddingLeft: "10px",
                                paddingRight: "10px",

                                marginBottom: "10px",
                                display: "flex",
                                alignItems: "center",
                            }}>
                                <img
                                    src={day.icon}
                                    alt={day.shortForecast}
                                    style={{margin: "10px"}}
                                />
                                <div>
                                    <h4>{day.shortForecast}</h4>
                                    <p>{day.temperature}°{day.temperatureUnit}</p>
                                    <p>

                                        {day.probabilityOfPrecipitation.value} {day.probabilityOfPrecipitation.value && "% Chance of Rain"}
                                    </p>
                                    <p>{day.detailedForecast}</p>
                                </div>
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
    // const Weather: React.FC = () => {
    //
    // };

}



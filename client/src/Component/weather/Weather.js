import React, { useEffect, useState } from "react";
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

function Weather() {
    const [query, setQuery] = useState('');
    const [weather, setWeather] = useState({});
    const [loading, setLoading] = useState(false);
    const [latitude, setLatitude] = useState(null);
    const [longitude, setLongitude] = useState(null); // Fixed typo here

    const API_KEY = '4edac2eabf494946a189e86050976521';

    useEffect(() => {
        // Function to get user's geolocation
        const getLocation = () => {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition((position) => {
                    setLatitude(position.coords.latitude);
                    setLongitude(position.coords.longitude);
                }, (error) => {
                    console.error('Error getting location:', error);
                });
            } else {
                console.error('Geolocation is not supported by this browser.');
            }
        };

        getLocation();
    }, []);

    useEffect(() => {
        if (latitude !== null && longitude !== null) {
            searchWeather();
        }
    }, [latitude, longitude]);

    const searchWeather = async () => {
        try {
            setLoading(true);
            const response = await axios.get(
                `https://api.weatherbit.io/v2.0/current?lat=${latitude}&lon=${longitude}&key=${API_KEY}`
            );
            setWeather(response.data.data[0]);
        } catch (error) {
            console.error('Error fetching weather:', error);
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="container mt-5">
            <h1 className="mb-4">날씨</h1>
            {loading ? (
                <p>검색중..</p>
            ) : (
                <div>
                    {weather.city_name ? (
                        <div className="card">
                            <div className="card-body">
                                <h2 className="card-title">{weather.city_name}</h2>
                                <p>온도: {weather.temp}</p>
                                <p>습도: {weather.rh}%</p>
                                <p>날씨: {weather.weather.description}</p>
                                <p>국가 : {weather.timezone}</p>
                                날씨 :{weather.weather.icon && (
                        <img className='mb-3 img-fluid rounded mx-auto d-block' 
                         src={`https://www.weatherbit.io/static/img/icons/${weather.weather.icon}.png`}
                        alt='weather Icon'
                        />
                         
                    )}
                            </div>
                        </div>
                    ) : (
                        <p>날씨 정보를 가져오는 중입니다.</p>
                    )}
                </div>
            )}
        </div>
    );
}

export default Weather;
import axios from 'axios';
import getCoords from '../Utils/coords';
import { useEffect, useState } from 'react';
import Failed from '../Components/Failed/Failed';
import Loading from '../Components/Loading/Loading';

const WEATHER_URL = process.env.REACT_APP_API_WEATHER_URL,
    WEATHER_TOKEN = process.env.REACT_APP_API_WEATHER_KEY,
    PLACE_URL = process.env.REACT_APP_API_PLACES_URL;

const getData = (Component) => {

    const DataContainer = (props) => {

        let [isFetching, setIsFetching] = useState(true);

        let [address, setAddress] = useState(null);
        let [language, setLanguage] = useState('en');
        let [unit, setUnit] = useState('metric');

        let [data, setData] = useState(null);

        //fetching from api address data
        useEffect(() => {
            let cleanupFunction = false;

            const addressData = (lon, lat, error) => {
                if(error) {
                    return;
                }

                axios
                    .get(`${PLACE_URL}&lat=${lat}&lon=${lon}&accept-language=${language}`)
                    .then((response) => {
                        if(response.status === 200 && !cleanupFunction){
                            setAddress({
                                village: response.data.address.village,
                                city: response.data.address.city,
                                country: response.data.address.country
                            });
                        }
                    });
            }

            getCoords(addressData);

            return () => cleanupFunction = true;
        }, [language])

        //fetching from api weather data
        useEffect(() => {
            let cleanupFunction = false;

            const weatherData = (lon, lat, error) => {
                if(error) {
                    setIsFetching(false);
                    return
                }

                axios
                    .get(`${WEATHER_URL}&lat=${lat}&lon=${lon}&units=${unit}&lang=${language}&appid=${WEATHER_TOKEN}`)
                    .then(response => {
                        if(response.status === 200 && !cleanupFunction){ 
                            setData(response.data);
                        }
                        setIsFetching(false);
                    });
            }
            
            getCoords(weatherData);

            const languageStorage = localStorage.getItem('i18nextLng');
            if(!cleanupFunction && languageStorage && language !== languageStorage) {
                setLanguage(languageStorage);
            }

            return () => cleanupFunction = true;
        }, [language, unit]);


        if (isFetching) {
            return <Loading />
        }

        if (!data) {
            return <Failed />
        }

        return (
            <Component {...props}
                state={{ data, language, unit, address, setLanguage, setUnit}} />
        );
    }

    DataContainer.displayName = `DataContainer(${Component.displayName || Component.name || 'Component'})`;

    return DataContainer;
}

export default getData;

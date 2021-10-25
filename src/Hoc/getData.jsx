import axios from 'axios';
import { useEffect, useState } from 'react';
import Loading from '../Components/Loading/Loading';
import getCoords from '../Utils/coords';

const WEATHER_URL = process.env.REACT_APP_API_WEATHER_URL,
    WEATHER_TOKEN = process.env.REACT_APP_API_WEATHER_KEY,
    PLACE_URL = process.env.REACT_APP_API_PLACES_URL;

const getData = (Component) => {

    const DataContainer = (props) => {

        let [address, setAddress] = useState('');
        let [language, setLanguage] = useState('en');
        let [unit, setUnit] = useState('metric');

        let [data, setData] = useState(null);


        //fetching from localStorage unit and language data
        useEffect(() => {
            let cleanupFunction = false;

            const languageStorage = localStorage.getItem('i18nextLng');
            if(!cleanupFunction && languageStorage) {
                setLanguage(languageStorage);
            }

            const unitStorage = localStorage.getItem('unit');
            if(!cleanupFunction && unitStorage) {
                setUnit(unitStorage);
            }

            return () => cleanupFunction = true;
        });

        //fetching from api weather data
        useEffect(() => {
            let cleanupFunction = false;

            const weatherData = (lat, lon) => {
                axios
                    .get(`${WEATHER_URL}&lat=${lat}&lon=${lon}&units=${unit}&lang=${language}&appid=${WEATHER_TOKEN}`)
                    .then((response) => {
                        if (response.status === 200 && !cleanupFunction) {
                            setData(response.data);
                        } else {
                            return data
                        }
                    });
            }

            const addressData = (lat, lon) => {
                axios
                    .get(`${PLACE_URL}&lat=${lat}&lon=${lon}&accept-language=${language}`)
                    .then(response => {
                        if (response.status === 200 && !cleanupFunction) {
                            setAddress(`${response.data.address.city || response.data.address.village}, 
                                            ${response.data.address.country}`)
                        } else {
                            return address;
                        }
                    });
            }

            getCoords(weatherData);
            getCoords(addressData);
        
            return () => cleanupFunction = true;
        }, [language, unit]);


        if (!data) {
            return <Loading />
        }

        return (
            <Component {...props} 
                        state={
                            {
                                data, 
                                language,
                                unit,
                                address,
                                setLanguage,
                                setUnit
                            }
                        }/>
        );
    }

    DataContainer.displayName = `DataContainer(${Component.displayName || Component.name || 'Component'})`;


    return DataContainer;
}

export default getData;

import axios from 'axios';
import { useEffect, useState } from 'react';
import Failed from '../Components/Failed/Failed';
import Loading from '../Components/Loading/Loading';
import getCoords from '../Utils/coords';

const WEATHER_URL = process.env.REACT_APP_API_WEATHER_URL,
    WEATHER_TOKEN = process.env.REACT_APP_API_WEATHER_KEY,
    PLACE_URL = process.env.REACT_APP_API_PLACES_URL;

const getData = (Component) => {

    const DataContainer = (props) => {

        let [isFetching, setIsFetching] = useState(true);

        let [address, setAddress] = useState('');
        let [language, setLanguage] = useState('en');
        let [unit, setUnit] = useState('metric');

        let [data, setData] = useState(null);

        //fetching from localStorage language and unit data
        const storageDataSynch = (flag) => {
            const languageStorage = localStorage.getItem('i18nextLng');
            if (!flag && languageStorage) {
                setLanguage(languageStorage);
            }

            const unitStorage = localStorage.getItem('unit');
            if (!flag && unitStorage) {
                setUnit(unitStorage);
            }
        }

        //fetching from api address data
        useEffect(() => {
            let cleanupFunction = false;

            if(!cleanupFunction) {
                getCoords()
                    .then(({lat, lon, error}) => {
                        storageDataSynch(cleanupFunction);
                        return error 
                                ? null 
                                : axios.get(`${PLACE_URL}&lat=${lat}&lon=${lon}&accept-language=${language}`, {
                                    mode: 'cors',
                                    credentials: 'include'
                                });
                    })
                    .then((response) => {
                        if(response) {
                            if(response.status !== 200) console.log('blocked');

                            setAddress(`${response.data.address.city || response.data.address.village}, 
                                        ${response.data.address.country}`);
                        }
                    })
            }

            return () => cleanupFunction = true;
        }, [language]);

        //fetching from api weather data
        useEffect(() => {
            let cleanupFunction = false;
            storageDataSynch(cleanupFunction);

            if(!cleanupFunction) {
                getCoords()
                    .then(({lat, lon, error, errorType}) => {
                        storageDataSynch(cleanupFunction);
                        return error 
                            ? null 
                            : axios.get(`${WEATHER_URL}&lat=${lat}&lon=${lon}&units=${unit}&lang=${language}&appid=${WEATHER_TOKEN}`);
                    })
                    .then((response) => {
                        if(response) {
                            setData(response.data);
                        }
                        setIsFetching(false);
                    });
            }

            return () => cleanupFunction = true;
        }, [language, unit]);


        if (isFetching) {
            return <Loading />
        }

        if (!data) {
            return <Failed errorTitle={'Oops...We can\'t find you, sorry((('}/>
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

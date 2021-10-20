import axios from 'axios';
import { useEffect, useState } from 'react';
import getCoords from '../Utils/coords';

const WEATHER_URL = process.env.REACT_APP_API_WEATHER_URL,
    WEATHER_TOKEN = process.env.REACT_APP_API_WEATHER_KEY,

    PLACE_URL = process.env.REACT_APP_API_PLACES_URL,
    PLACE_KEY = process.env.REACT_APP_API_PLACES_KEY,

    IPI_URL = process.env.REACT_APP_API_IPI_URL;

const getData = (Component) => {

    const ComponentContainer = (props) => {

        let [address, setAddress] = useState('');
        let [language, setLanguage] = useState('en');
        let [unit, setUnit] = useState('metric');

        let [state, setState] = useState(null);

        useEffect(() => {
            let cleanupFunction = false;

            axios.get(IPI_URL)
                .then(response => {
                    if(response.status === 200 && !cleanupFunction) {
                        return response.data.ip
                    }
                })
                .then(ipi => {
                    axios.get(`${PLACE_URL}${ipi}?access_key=${PLACE_KEY}&format=1`)
                        .then(response => {
                            if(response.status === 200 && !cleanupFunction) {
                                setAddress(`${response.data.region_name}, ${response.data.country_name}`);
                                setLanguage(response.data.location.languages[0].code);
                            }
                        });
                });
                
            return () => cleanupFunction = true;
        });

        //weather situation data fetch
        useEffect(() => {
            let cleanupFunction = false;

            const success = (lat, lon) => {
                axios
                    .get(`${WEATHER_URL}&lat=${lat}&lon=${lon}&units=${unit}&lang=${language}&appid=${WEATHER_TOKEN}`)
                    .then((response) => {
                        if (response.status === 200 && !cleanupFunction) {
                            setState(response.data);
                        } else {
                            return state
                        }
                    });
            }

            getCoords(success);
        
            return () => cleanupFunction = true;
        }, [language, unit]);


        if (!state) {
            return null
        }

        return (
            <Component {...props} 
                        state={{
                            state, 
                            language,
                            unit,
                            address,
                            setLanguage,
                            setUnit
                        }}/>
        );
    }

    return ComponentContainer;
}

export default getData;

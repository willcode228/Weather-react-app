import axios from 'axios';
import {useEffect, useState} from 'react';

const URL = process.env.REACT_APP_API_URL,
    TOKEN = process.env.REACT_APP_API_KEY;

const getData = (Component) => {

    const ComponentContainer = (props) => {
        let [state, setState] = useState({language: 'ua'});

        useEffect(() => {
            let cleanupFunction = false;
            navigator.geolocation.getCurrentPosition(success, error);
    
            function error(err) {
                console.warn(`ERROR(${err.code}): ${err.message}`);
                alert('Простите, но мы не можем определить ваше место нахождение');
            }
        
            function success(pos){
                let lat = pos.coords.latitude,
                    lon = pos.coords.longitude;
        
                axios
                    .get(`${URL}?lat=${lat}&lon=${lon}&units=metric&exclude=hourly,minutely&appid=${TOKEN}`)
                    .then((response) => {
                        if(response.status === 200 && !cleanupFunction){
                            setState(prevState => ({
                                language: prevState.language,
                                data: response.data,
                            }));
                        }else{
                            return state
                        }
                    });
            }

            return () => cleanupFunction = true;
        }, []);

        
        if(!state.data) {
            return null
        }

        return (
            <Component {...props} state={state} /> 
        );
    }

    return ComponentContainer;
}

export default getData;

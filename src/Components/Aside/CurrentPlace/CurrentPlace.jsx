import axios from 'axios';
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import styles from './CurrentPlace.module.scss';
import city from '../../../Assets/icons/city-bg.svg';


const CurrentPlace = ({address}) => {

    let PHOTO_URL = process.env.REACT_APP_API_PHOTO_URL,
        PHOTO_KEY = process.env.REACT_APP_API_PHOTO_KEY;

    let [img, setImg] = useState(null);

    useEffect(() => {
        let cleanupFunction = false;
        const mainAddressName = address ? address.city || address.village : '';

        axios.get(`${PHOTO_URL}?key=${PHOTO_KEY}&q=${mainAddressName}&per_page=3`)
        .then(response => {
            if(response.status === 200 && !cleanupFunction && mainAddressName) {
                setImg(response.data.hits[0].largeImageURL);
            }
        });

        return () => cleanupFunction = true;
    });

    return (
        <div className={styles.address}>

            {
                !img ? <img src={city} alt='city' /> 
                    : <img src={img} alt="city" />
            }

            <div className={styles.titleWrapper}>
                <h1 className={styles.title}>
                    { 
                        address
                            ? `${address.city || address.village}, ${address.country}`
                            : ''
                    }
                </h1>
            </div>
            
        </div>
    )
}

CurrentPlace.propTypes = {
    address: PropTypes.object
}

export default CurrentPlace;

import axios from 'axios';
import { useState, useEffect } from 'react';
import styles from './CurrentPlace.module.scss';
import city from '../../../assets/icons/city-bg.svg';

const CurrentPlace = ({address}) => {

    let PHOTO_URL = process.env.REACT_APP_API_PHOTO_URL,
        PHOTO_KEY = process.env.REACT_APP_API_PHOTO_KEY;


    let [img, setImg] = useState(null);

    useEffect(() => {
        axios.get(`${PHOTO_URL}?key=${PHOTO_KEY}&q=${address.split(',')[0]}&per_page=3`)
        .then(response => {
            if(response.status === 200) {
                setImg(response.data.hits[0].largeImageURL);
            }
        });
    })

    return (
        <div className={styles.address}>

            {
                !img ? <img src={city} alt='city' /> 
                    : <img src={img} alt="city" />
            }

            <div className={styles.titleWrapper}>
                <h1 className={styles.title}>{address}</h1>
            </div>
        </div>
    )
}

export default CurrentPlace;

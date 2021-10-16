import styles from './CurrentWeather.module.scss';
import { ReactComponent as CloudIcon } from '../../../assets/icons/cloud.svg';
import {ReactComponent as HumidityIcon} from '../../../assets/icons/humidity.svg';

const CurrentWeather = (props) => {
    const imgURL = process.env.REACT_APP_ICONS_URL;

    return (
        <div className={styles.currentWeather}>

            <img className={styles.currentWeather__img} 
                src={`${imgURL}${props.data.weather[0].icon}@4x.png`} 
                alt="weather situation icon" />

            <h1 className={styles.temp}>
                {Math.round(props.data.feels_like)}
                <sup className={styles.tempSup}>&#8451;</sup>
            </h1>

            <p className={styles.date}>
                {new Date().toLocaleDateString()}
            </p>

            <div className={styles.clouds}>
                <CloudIcon className={styles.clouds__icon}/>
                <p className={styles.clouds__description}>
                    {props.data.weather[0].description}
                </p>
            </div>

            <div className={styles.humidity}>
                <HumidityIcon className={styles.humidity__icon}/>
                <p className={styles.humidity__percent}>
                    {props.data.humidity}%
                </p>
            </div>

        </div>
    );
}

export default CurrentWeather;
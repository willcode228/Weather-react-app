import styles from './CurrentWeather.module.scss';
import { ReactComponent as CloudIcon } from '../../../assets/icons/cloud.svg';
import {ReactComponent as HumidityIcon} from '../../../assets/icons/humidity.svg';
import FormatDate from './Date/Date';
import Address from './Address/Address';

const CurrentWeather = (props) => {
    const imgURL = process.env.REACT_APP_ICONS_URL;

    return (
        <div className={styles.currentWeather}>

            <img className={styles.currentWeather__img} 
                src={`${imgURL}${props.state.weather[0].icon}@4x.png`} 
                alt="weather situation icon" />

            <h1 className={styles.temp}>
                {Math.round(props.state.feels_like)}
                <sup className={styles.tempSup}>&#8451;</sup>
            </h1>

            <FormatDate language={props.language}/>

            <div className={styles.clouds}>
                <CloudIcon className={styles.clouds__icon}/>
                <p className={styles.clouds__description}>
                    {props.state.weather[0].description}
                </p>
            </div>

            <div className={styles.humidity}>
                <HumidityIcon className={styles.humidity__icon}/>
                <p className={styles.humidity__percent}>
                    {props.state.humidity}%
                </p>
            </div>

            <Address address={props.address} />

        </div>
    );
}

export default CurrentWeather;
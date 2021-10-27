import PropTypes from 'prop-types';
import unit from '../../../Hoc/unit';
import FormatDate from './Date/Date';
import styles from './CurrentWeather.module.scss';
import { ReactComponent as CloudIcon } from '../../../Assets/icons/cloud.svg';
import {ReactComponent as HumidityIcon} from '../../../Assets/icons/humidity.svg';

const CurrentWeather = ({state, language, unit}) => {
    const imgURL = process.env.REACT_APP_ICONS_URL;

    return (
        <div className={styles.currentWeather}>

            <img className={styles.currentWeather__img} 
                src={`${imgURL}${state.weather[0].icon}@4x.png`} 
                alt='weather situation icon' />

            <h1 className={styles.temp}>
                {Math.round(state.feels_like)}
                <sup className={styles.tempSup}>{unit}</sup>
            </h1>

            <FormatDate language={language}/>

            <div className={styles.clouds}>
                <CloudIcon className={styles.clouds__icon}/>
                <p className={styles.clouds__description}>
                    {state.weather[0].description}
                </p>
            </div>

            <div className={styles.humidity}>
                <HumidityIcon className={styles.humidity__icon}/>
                <p className={styles.humidity__percent}>
                    {state.humidity}%
                </p>
            </div>

        </div>
    );
}

CurrentWeather.propTypes = {
    state: PropTypes.object,
    language: PropTypes.string,
    unit: PropTypes.string
}

export default unit(CurrentWeather);
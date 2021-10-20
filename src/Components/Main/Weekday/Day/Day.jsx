import WeekDate from './Date';
import styles from './Day.module.scss';


let ICON_URL = process.env.REACT_APP_ICONS_URL;

const Day = ({day, language, unit}) => {
    return (
        <div className={styles.day}>

            <h2 className={styles.day__date}>
                <WeekDate dt={day.dt} language={language}/>
            </h2>

            <div className={styles.day__img}>
                <img src={`${ICON_URL}${day.weather[0].icon}@4x.png`} alt="icon"/>
            </div>

            <div className={styles.day__temp}>
                <h4 className={styles.day__temp_max}>
                    {Math.round(day.temp.max)}
                    <sup>{unit}</sup>
                </h4>

                <h4 className={styles.day__temp_min}>
                    {Math.round(day.temp.min)}
                    <sup>{unit}</sup>
                </h4>
            </div>
        </div>
    );
}

export default Day;
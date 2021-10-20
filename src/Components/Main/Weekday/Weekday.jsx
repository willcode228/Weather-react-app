import styles from './Weekday.module.scss';
import Day from './Day/Day';

const Weekday = ({state, language, unit}) => {

    return (
        <div className={styles.daily}>
            {
                state.slice(1).map(day => (
                    <Day key={day.dt} day={day} language={language} unit={unit}/>
                ))
            }
        </div>
    );
}

export default Weekday;
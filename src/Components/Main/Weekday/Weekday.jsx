import Day from './Day/Day';
import PropTypes from 'prop-types';
import unit from '../../../Hoc/unit';
import styles from './Weekday.module.scss';

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

Weekday.propsTypes = {
    state: PropTypes.object,
    language: PropTypes.string,
    unit: PropTypes.string,
}

export default unit(Weekday);
import PressureStatus from './blocks/PressureStatus/PressureStatus';
import WindStatus from './blocks/WindStatus/WindStatus';
import SunStatus from './blocks/SunStatus/SunStatus';
import styles from './Highlights.module.scss';

const Highlights = ({state, unit}) => {
    return (
        <div className={styles.highlights}>
            <h2 className={styles.highlights__title}>Today's Highlights</h2>

            <div className={styles.highlights__box}>

                <WindStatus deg={state.wind_deg} 
                            speed={state.wind_speed}
                            unit={unit}/>

                <SunStatus sunrise={state.sunrise}
                            sunset={state.sunset}
                            language={state.language}/>

                <PressureStatus pressure={state.pressure}/>

            </div>
        </div>
    );
}

export default Highlights;
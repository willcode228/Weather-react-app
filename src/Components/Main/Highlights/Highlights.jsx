import Compass from './blocks/WindStatus/Compass';
import WindStatus from './blocks/WindStatus/WindStatus';
import styles from './Highlights.module.scss';

const Highlights = ({state, unit}) => {
    return (
        <div className={styles.highlights}>
            <h2 className={styles.highlights__title}>Today's Highlights</h2>

            <div className={styles.highlights__box}>

                <WindStatus deg={state.wind_deg} 
                            speed={state.wind_speed}
                            unit={unit}/>
                <WindStatus deg={state.wind_deg} 
                            speed={state.wind_speed}
                            unit={unit}/>
                <WindStatus deg={state.wind_deg} 
                            speed={state.wind_speed}
                            unit={unit}/>

            </div>
        </div>
    );
}

export default Highlights;
import '../../../Utils/i18next';
import styles from './Highlights.module.scss';
import { useTranslation } from 'react-i18next';
import SunStatus from './blocks/SunStatus/SunStatus';
import WindStatus from './blocks/WindStatus/WindStatus';
import PressureStatus from './blocks/PressureStatus/PressureStatus';


const Highlights = ({state, language, unit}) => {
    const { t } = useTranslation();

    return (
        <div className={styles.highlights}>

            <h2 className={styles.highlights__title}>
                {t('highlights.title')}
            </h2>

            <div className={styles.highlights__box}>

                <WindStatus deg={state.wind_deg} 
                            speed={state.wind_speed}
                            unit={unit}/>

                <SunStatus sunrise={state.sunrise}
                            sunset={state.sunset}
                            language={language}/>

                <PressureStatus pressure={state.pressure}/>

            </div>
        </div>
    );
}

export default Highlights;
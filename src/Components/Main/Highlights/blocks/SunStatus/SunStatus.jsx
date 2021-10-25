import main from '../Highlight.module.scss';
import styles from './SunStatus.module.scss';
import sunriseIcon from '../../../../../assets/icons/sunrise.png'
import sunsetIcon from '../../../../../assets/icons/sunset.png'

import { useTranslation } from 'react-i18next';
import '../../../../../Utils/i18next';


const SunStatus = ({sunrise, sunset, language}) => {
    const { t } = useTranslation();

    return (
        <div className={main.highlight}>
            <h2 className={main.highlight__title}>
                {t('highlights.sun-status.title')}
            </h2>
            
            <div className={styles.highlight__box}>

                <div className={styles.highlight__box_line}>
                    <img src={sunriseIcon} alt='sunrise icon'/>
                    <h3 className={main.highlight__unit}>
                        {sunStatusTime(sunrise, language)}
                    </h3> 
                </div>
                <div className={styles.highlight__box_line}>
                    <img src={sunsetIcon} alt='sunset icon'/>
                    <h3 className={main.highlight__unit}>
                        {sunStatusTime(sunset, language)}
                    </h3>
                </div>

            </div>

        </div>
    );
}

const sunStatusTime = (time, language) => {
    return new Date(time * 1000)
            .toLocaleDateString(language, {hour: 'numeric', minute:'numeric'})
            .split(',')[1];
}

export default SunStatus;
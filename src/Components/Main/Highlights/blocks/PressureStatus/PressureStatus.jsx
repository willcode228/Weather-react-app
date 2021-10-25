import main from '../Highlight.module.scss';
import styles from './PressureStatus.module.scss';

import { useTranslation } from 'react-i18next';
import '../../../../../Utils/i18next';


const PressureStatus = ({pressure}) => {
    const { t } = useTranslation();

    let healthyPoint;

    if(pressure <= 700 || pressure > 1000) healthyPoint = `${t('highlights.pressure-status.unhealthy')} 👎🏻`
    else if(pressure > 900) healthyPoint = `${t('highlights.pressure-status.average')} 🙁`
    else if(pressure > 800) healthyPoint = `${t('highlights.pressure-status.normal')} 🤙🏻`
    else if(pressure > 765) healthyPoint = `${t('highlights.pressure-status.good')} 😀`
    
    return (
        <div className={main.highlight}>
            <h2 className={main.highlight__title}>
                {t('highlights.pressure-status.title')}
            </h2>
            <h2 className={main.highlight__value}>{pressure}</h2>
            <h3 className={styles.highlight__unit}>{healthyPoint}</h3>
        </div>
    );
}

export default PressureStatus;
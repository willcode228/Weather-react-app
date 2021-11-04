import '../../../../../Utils/i18next';
import main from '../Highlight.module.scss';
import { useTranslation } from 'react-i18next';
import styles from './PressureStatus.module.scss';



const PressureStatus = ({pressure}) => {
    const { t } = useTranslation();

    //format pressure from hectopascals to millimeters of water column
    const formatPressure = (pressure / 1.3333).toFixed(0);

    let healthyPoint;

    if(formatPressure <= 755 || formatPressure > 1000) healthyPoint = `${t('highlights.pressure-status.unhealthy')} 👎🏻`
    else if(formatPressure > 900) healthyPoint = `${t('highlights.pressure-status.average')} 🙁`
    else if(formatPressure > 800) healthyPoint = `${t('highlights.pressure-status.normal')} 🤙🏻`
    else if(formatPressure > 755) healthyPoint = `${t('highlights.pressure-status.good')} 😀`
    
    return (
        <div className={main.highlight}>
            <h2 className={main.highlight__title}>
                {t('highlights.pressure-status.title')}
            </h2>
            <h2 className={main.highlight__value}>{formatPressure}</h2>
            <h3 className={styles.highlight__unit}>{healthyPoint}</h3>
        </div>
    );
}

export default PressureStatus;
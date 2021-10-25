import main from '../Highlight.module.scss';
import Compass from './Compass';
import styles from './WindStatus.module.scss';

import { useTranslation } from 'react-i18next';
import '../../../../../Utils/i18next';

const WindStatus = ({deg, speed, unit}) => {
    const { t } = useTranslation();

    return (
        <div className={main.highlight}>
            <h3 className={main.highlight__title}>
                {t('highlights.wind-status.title')}
            </h3>
            <h2 className={main.highlight__value}>
                {speed}
                <span className={main.highlight__unit}>
                    {
                        unit === 'imperial' 
                            ? t('highlights.wind-status.unit.imperial') 
                            : t('highlights.wind-status.unit.metric')
                    }
                </span>
            </h2>
            <Compass className={styles.compass} deg={deg} />
        </div>
    )
}

export default WindStatus;
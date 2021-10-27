import '../../Utils/i18next';
import oops from '../../Assets/oops.png';
import styles from './Failed.module.scss';
import { useTranslation } from 'react-i18next';

const Failed = () => {
    const { t } = useTranslation();

    return (
        <div className={styles.failed}>
            <h1 className={styles.title}>
                {t('failed-title')}
            </h1>
            <img src={oops} alt='Failed'/>
        </div>
    );
}

export default Failed;
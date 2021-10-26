import styles from './Failed.module.scss';
import oops from '../../assets/oops.png';

const Failed = ({errorTitle}) => {
    return (
        <div className={styles.failed}>
            <h1 className={styles.title}>{errorTitle}</h1>
            <img src={oops} alt='Failed'/>
        </div>
    );
}

export default Failed;
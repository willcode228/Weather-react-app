import main from '../Highlight.module.scss';
import Compass from './Compass';
import styles from './WindStatus.module.scss';

const WindStatus = ({deg, speed, unit}) => {
    return (
        <div className={main.highlight}>
            <h3 className={main.highlight__title}>Wind Status</h3>
            <h2 className={main.highlight__value}>
                {speed}
                <span className={main.highlight__unit}>
                    {unit === 'imperial' ? 'km/h' : 'm/s'}
                </span>
            </h2>
            <Compass className={styles.compass} deg={deg} />
        </div>
    )
}

export default WindStatus;
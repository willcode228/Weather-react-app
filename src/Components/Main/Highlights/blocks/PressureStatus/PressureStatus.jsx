import main from '../Highlight.module.scss';
import styles from './PressureStatus.module.scss';

const PressureStatus = ({pressure}) => {

    let healthyPoint;

    if(pressure <= 700 || pressure > 1000) healthyPoint = 'Unhealthy 👎🏻'
    else if(pressure > 900) healthyPoint = 'Average 🙁'
    else if(pressure > 800) healthyPoint = 'Normal 🤙🏻'
    else if(pressure > 765) healthyPoint = 'Good 😀'
    
    return (
        <div className={main.highlight}>
            <h2 className={main.highlight__title}>Pressure</h2>
            <h2 className={main.highlight__value}>{pressure}</h2>
            <h3 className={styles.highlight__unit}>{healthyPoint}</h3>
        </div>
    );
}

export default PressureStatus;
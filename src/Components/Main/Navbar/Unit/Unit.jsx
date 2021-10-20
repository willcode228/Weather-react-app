import styles from './Unit.module.scss';
import UnitBtn from "./UnitBtn/UnitBtn";

const fahrenheit = process.env.REACT_APP_FAHRENHEIT,
    celsius = process.env.REACT_APP_CELSIUS;

const Unit = ({unit, setUnit}) => {
    return (
        <div className={styles.unit}>
            <UnitBtn unit={celsius} unitName={{
                staticName: 'metric',
                serverName: unit
            }} setUnit={setUnit}/>

            <UnitBtn unit={fahrenheit} unitName={{
                staticName: 'imperial',
                serverName: unit
            }} setUnit={setUnit}/>
        </div>
    )
}

export default Unit;
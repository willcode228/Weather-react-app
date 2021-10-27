import styles from './UnitBtn.module.scss';

const UnitBtn = ({unit, unitName, setUnit}) => {

    let status = unitName.staticName === unitName.serverName;

    const handleClick = () => {
        setUnit(unitName.staticName);
    }

    return (
        <button className={`${styles.unitBtn} ${status ? styles.active : '' }`}
                disabled={status ? 1 : 0}
                onClick={handleClick}>
            {unit}
        </button>
    )
}

export default UnitBtn;
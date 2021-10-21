import styles from './Highlights.module.scss';

const Highlights = ({state}) => {
    console.log(state);

    return (
        <div className={styles.highlights}>
            <h2 className={styles.highlights__title}>Today's Highlights</h2>

            <div className={styles.highlights__box}>

                <div className={styles.highlights__card}></div>
                <div className={styles.highlights__card}></div>
                <div className={styles.highlights__card}></div>
                <div className={styles.highlights__card}></div>
                <div className={styles.highlights__card}></div>
                <div className={styles.highlights__card}></div>

            </div>
        </div>
    );
}

export default Highlights;
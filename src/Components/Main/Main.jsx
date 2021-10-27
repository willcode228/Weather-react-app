import Navbar from './Navbar/Navbar';
import styles from './Main.module.scss';
import Weekday from './Weekday/Weekday';
import consumer from '../../Hoc/contextConsumer';
import Highlights from './Highlights/Highlights';

const Main = ({state}) => {
    return (
        <div className={styles.main}>
            <Navbar state={state}/>

            <Weekday state={state.data.daily}
                    language={state.language}
                    unit={state.unit}/>

            <Highlights state={state.data.daily.slice(0,1)[0]}
                        unit={state.unit}/>
        </div>
    );
}

export default consumer(Main);
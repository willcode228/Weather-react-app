import styles from './Main.module.scss';
import Navbar from "./Navbar/Navbar";
import Weekday from "./Weekday/Weekday";
import consumer from '../../Hoc/contextConsumer';
import Highlights from './Highlights/Highlights';

const Main = ({state}) => {
    return (
        <div className={styles.main}>
            <Navbar />

            <Weekday state={state.state.daily}
                    language={state.language}
                    unit={state.unit}/>

            <Highlights state={state.state.daily.slice(0,1)[0]}
                        unit={state.unit}/>
        </div>
    );
}

export default consumer(Main);
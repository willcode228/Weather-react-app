import styles from './Main.module.scss';
import Navbar from "./Navbar/Navbar";
import Weekday from "./Weekday/Weekday";
import consumer from '../../Hoc/contextConsumer';
import Highlights from './Highlights/Highlights';

const fahrenheit = process.env.REACT_APP_FAHRENHEIT,
    celsius = process.env.REACT_APP_CELSIUS;

const Main = ({state}) => {
    return (
        <div className={styles.main}>
            <Navbar />
            <Weekday state={state.state.daily}
                    language={state.language}
                    unit={state.unit === 'imperial' ? fahrenheit : celsius}/>

            <Highlights state={state.state.daily.slice(0,1)[0]}/>
        </div>
    );
}

export default consumer(Main);
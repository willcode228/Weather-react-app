import consumer from '../../Hoc/contextConsumer';
// import Search from '../Search/Search';
import styles from './Aside.module.scss';
import CurrentWeather from './CurrentWeather/CurrentWeather';
import CurrentPlace from './CurrentPlace/CurrentPlace';

const fahrenheit = process.env.REACT_APP_FAHRENHEIT,
    celsius = process.env.REACT_APP_CELSIUS;

const Aside = ({state}) => {
    return (
        <div className={styles.aside}>
            {/* <Search /> */}
            <CurrentWeather state={state.state.current} 
                            language={state.language} 
                            address={state.address}
                            unit={state.unit === 'imperial' ? fahrenheit : celsius}/>
            <CurrentPlace />
        </div>
    )
}

export default consumer(Aside);
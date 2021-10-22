import consumer from '../../Hoc/contextConsumer';
// import Search from '../Search/Search';
import styles from './Aside.module.scss';
import CurrentWeather from './CurrentWeather/CurrentWeather';
import CurrentPlace from './CurrentPlace/CurrentPlace';

const Aside = ({state}) => {
    return (
        <div className={styles.aside}>
            {/* <Search /> */}
            <CurrentWeather state={state.state.current} 
                            language={state.language} 
                            unit={state.unit}/>
                            
            <CurrentPlace address={state.address}/>
        </div>
    )
}

export default consumer(Aside);
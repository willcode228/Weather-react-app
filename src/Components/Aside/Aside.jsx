import consumer from '../../Hoc/contextConsumer';
import styles from './Aside.module.scss';
import CurrentWeather from './CurrentWeather/CurrentWeather';
import CurrentPlace from './CurrentPlace/CurrentPlace';

const Aside = ({state}) => {
    return (
        <div className={styles.aside}>
            <CurrentWeather state={state.data.current} 
                            language={state.language} 
                            unit={state.unit}/>
                            
            <CurrentPlace address={state.address}/>
        </div>
    )
}

export default consumer(Aside);
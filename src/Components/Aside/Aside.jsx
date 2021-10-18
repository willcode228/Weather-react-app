import consumer from '../../Hoc/contextConsumer';
// import Search from '../Search/Search';
import styles from './Aside.module.scss';
import CurrentWeather from './CurrentWeather/CurrentWeather';
import CurrentPlace from './CurrentPlace/CurrentPlace';

const Aside = (props) => {
    return (
        <div className={styles.aside}>
            {/* <Search /> */}
            <CurrentWeather state={props.state.state.current} language={props.state.language} address={props.state.address}/>
            <CurrentPlace />
        </div>
    )
}

export default consumer(Aside);
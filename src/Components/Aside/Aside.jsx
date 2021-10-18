import consumer from '../../Hoc/contextConsumer';
import Search from '../Search/Search';
import styles from './Aside.module.scss';
import CurrentWeather from './CurrentWeather/CurrentWeather';
import CurrentPlace from './CurrentPlace/CurrentPlace';

const Aside = (props) => {

    return (
        <div className={styles.aside}>
            {/* <Search /> */}
            <CurrentWeather data={props.data.current} language={props.language}/>
            <CurrentPlace />
        </div>
    )
}

export default consumer(Aside);
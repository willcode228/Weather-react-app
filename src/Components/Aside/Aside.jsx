import consumer from '../../Hoc/contextConsumer';
import Search from '../Search/Search';
import styles from './Aside.module.scss';

const Aside = (props) => {
    console.log(new Date(props.value ? props.value.current.dt : 1));
    const imgURL = process.env.REACT_APP_ICONS_URL;

    return (
        <div className={styles.aside}>
            <Search />
            {/* <img src={imgURL+props.value.current.weather[0].icon+'@4x.png'} alt="weather situation icon" /> */}
            <img src={imgURL+'10d@4x.png'} alt="weather situation icon" />
            <h1>{props.value ? props.value.current.feels_like + '℃' : 1}</h1>
        </div>
    )
}

export default consumer(Aside);
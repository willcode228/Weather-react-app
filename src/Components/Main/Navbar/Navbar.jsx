import consumer from '../../../Hoc/contextConsumer';
import styles from './Navbar.module.scss';
import Unit from './Unit/Unit';

const Navbar = ({state}) => {
    return (    
        <nav className={styles.nav}>
            <div className={styles.theme}>
                Theme
            </div>

            <Unit unit={state.unit} setUnit={state.setUnit}/>

            <div className={styles.language}>
                Language
            </div>
        </nav>  
    );
}

export default consumer(Navbar);
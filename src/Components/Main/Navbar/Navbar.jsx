import consumer from '../../../Hoc/contextConsumer';
import Language from './Language/Language';
import styles from './Navbar.module.scss';
import Unit from './Unit/Unit';

const Navbar = ({state}) => {
    return (    
        <nav className={styles.nav}>
            <div className={styles.theme}>
                Theme
            </div>

            <Unit unit={state.unit} setUnit={state.setUnit}/>

            <Language language={state.language} setLanguage={state.setLanguage}/>
        </nav>  
    );
}

export default consumer(Navbar);
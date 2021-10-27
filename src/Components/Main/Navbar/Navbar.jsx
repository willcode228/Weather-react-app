import Unit from './Unit/Unit';
import styles from './Navbar.module.scss';
import Language from './Language/Language';

const Navbar = ({state}) => {
    return (    
        <nav className={styles.nav}>
            <Unit unit={state.unit} setUnit={state.setUnit}/>
            <Language language={state.language} setLanguage={state.setLanguage}/>
        </nav>  
    );
}

export default Navbar;
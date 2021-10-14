import styles from './Search.module.scss';
import {ReactComponent as SearchIcon} from '../../assets/icons/search.svg';
import {ReactComponent as DeleteIcon} from '../../assets/icons/delete.svg';
import { useState } from 'react';

const Search = () => {

    const [inputValue, setInputValue] = useState('');
    const [activeInput, setActiveInput] = useState(false);

    const handleInputFocus = () => {
        setActiveInput(prevState => !prevState);
        setInputValue('');
    }

    return (
        <div className={styles.search}>
            <SearchIcon className={styles.searchIcon}/>

            <div className={styles.inputWrapper}>

                <p className={`${styles.placeholder} ${activeInput ? styles.placeholderActive : ''}`}>
                    Search for places
                </p>

                <input type="text" 
                        className={styles.input} 

                        onFocus={handleInputFocus}
                        onBlur={handleInputFocus}

                        value={inputValue}
                        onChange={e => setInputValue(e.target.value)}/>
            </div>

            <button className={`${styles.deleteBtn} ${activeInput ? styles.deleteBtnActive : ''}`}>
                <DeleteIcon className={styles.deleteIcon}/>
            </button>

        </div>
    )
}

export default Search;
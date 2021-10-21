import { useState } from 'react';
import styles from './Language.module.scss';

const Language = ({language, setLanguage}) => {

    const [value, setValue] = useState(language);

    const handleChange = (e) => {
        setValue(e.target.value);
        setLanguage(e.target.value);
    }

    return (
        <select className={styles.language} 
                value={value} 
                onChange={handleChange}>

            <option value={language}>{language}</option>

            {
                language !== 'uk' 
                    ? <option value='uk'>uk</option>
                    : null
            }

            {
                language !== 'en' 
                    ? <option value='en'>en</option>
                    : null
            }

        </select>
    );
}

export default Language
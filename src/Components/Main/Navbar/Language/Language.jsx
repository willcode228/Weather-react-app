import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import styles from './Language.module.scss';

const Language = ({language, setLanguage}) => {

    const { t, i18n } = useTranslation();
    const [value, setValue] = useState(language);

    const handleChange = (e) => {
        setValue(e.target.value);
        setLanguage(e.target.value);
        i18n.changeLanguage(e.target.value);
    }

    return (
        <select className={styles.language} 
                value={value} 
                onChange={handleChange}>

            <option value='en'>en</option>
            <option value='uk'>uk</option>
            <option value='ru'>ru</option>
            
        </select>
    );
}

export default Language
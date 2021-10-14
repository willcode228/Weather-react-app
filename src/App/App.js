import styles from './App.module.scss';
import Provider from '../Context/Context';
import Aside from '../Components/Aside/Aside';

const App = () => {
    return (
        <div className={styles.app}>
            <Provider>
                <Aside />
            </Provider>
        </div>
    );
}



export default App;

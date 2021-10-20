import styles from './App.module.scss';
import Provider from '../Context/Context';
import Aside from '../Components/Aside/Aside';
import Main from '../Components/Main/Main';

const App = () => {
    return (
        <div className={styles.app}>
            <Provider>
                <Aside />
                <Main />
            </Provider>
        </div>
    );
}



export default App;

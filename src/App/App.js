import styles from './App.module.scss';
import Provider from '../Context/Context';
import Aside from '../Components/Aside/Aside';
import Main from '../Components/Main/Main';
import { Suspense } from 'react';
import Loading from '../Components/Loading/Loading';

const App = () => {
    return (
        <Suspense fallback={<Loading />}>
            <div className={styles.app}>
                <Provider>
                    <Aside />
                    <Main />
                </Provider>
            </div>
        </Suspense>
    );
}



export default App;

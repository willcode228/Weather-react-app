import { CSSTransition } from 'react-transition-group';
import styles from './Loading.module.scss';

const Loading = ({isFetching}) => {
    return (
        <CSSTransition 
            in={isFetching}
            mountOnEnter
            unmountOnExit
            timeout={1500}
            classNames={{
                enterActive: styles.loading__show,
                exitActive: styles.loading__hide
            }}>

            <div className={styles.loading__wrapper}>
                <div className={styles.dominoes}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </CSSTransition>
    );
}

export default Loading;
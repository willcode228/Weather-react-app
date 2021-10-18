import styles from './Date.module.scss';

const FormatDate = ({language}) => {

    const formatDateOptions = {
        weekday: 'long',
        hour: '2-digit',
        minute: '2-digit'
    }

    const formatDate = new Date()
                        .toLocaleDateString(language, formatDateOptions)
                        .toString()
                        .split(' ');

    let formatDatElements = formatDate.map((date, index) => {

        if(index === 0) return (
            <span className={styles.weekday} key={index}>
                {date.slice(0,1).toUpperCase() + date.slice(1)},
            </span>
        );
        
        if(index === 1) return (
            <span className={styles.time} key={index}>&#32;{date}</span>
        );

        return '';
    });

    return (
        <p className={styles.date}>{formatDatElements}</p>
    )
}

export default FormatDate;
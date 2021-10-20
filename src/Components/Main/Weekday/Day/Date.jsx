const WeekDate = ({dt, language}) => {
    return (
        <>
            {
                //format time to normal format
                new Date(dt * 1000)
                    .toLocaleDateString(language, {weekday: 'short'})
            }
        </>
    );
}

export default WeekDate;
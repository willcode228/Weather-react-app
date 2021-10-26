const geoObj = navigator.geolocation;
const geoOptions = {
    maximumAge: 5 * 60 * 1000,
    timeout: 10 * 1000
}

const getPosition = () => {
    return new Promise((resolve, reject) => 
        geoObj.getCurrentPosition(resolve, reject, geoOptions)
    );
}

const getCoords = () => {
    return getPosition()
                .then(pos => ({
                    lat: pos.coords.latitude,
                    lon: pos.coords.longitude,
                    error: false,
                    errorType: null
                }))
                .catch(err => ({
                    error: true,
                    errorType: err
                }));

}

export default getCoords;
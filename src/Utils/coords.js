const getCoords = (callback) => {
    const geoObj = navigator.geolocation;
    const geoOptions = {
        maximumAge: 5 * 60 * 1000,
        timeout: 10 * 1000
    };

    const success = (pos) => {
        let lon = pos.coords.longitude,
            lat = pos.coords.latitude;

        callback(lon, lat, false);
    }

    const error = () => {
        callback(0, 0, true);
    }

    geoObj ? geoObj.getCurrentPosition(success, error, geoOptions) : error();
}

export default getCoords;
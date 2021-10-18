const getCoords = (callback) => {
    const geoOptions = {
        maximumAge: 5 * 60 * 1000,
        timeout: 10 * 1000
    }

    if (navigator.geolocation) {
        const success = (pos) => {
            let lat = pos.coords.latitude,
                lon = pos.coords.longitude;
    
            callback(lat, lon);
        }
    
        const error = () => {
            alert('Простите, но мы не можем определить ваше место нахождение');
        }
    
        navigator.geolocation.getCurrentPosition(success, error, geoOptions);
        
    } else {
        console.log('Geolocation is not supported for this Browser/OS version yet.');
    }
    
}

export default getCoords;
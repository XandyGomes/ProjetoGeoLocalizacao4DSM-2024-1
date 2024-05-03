import { useState, useEffect } from "react";
import { requestMultiple, PERMISSIONS } from 'react-native-permissions';
import Geolocation from 'react-native-geolocation-service';
import { Platform } from 'react-native';

export default () => {
    const [errorMsg, setErrorMsg] = useState(null);
    const [coords, setCoords] = useState(null);

    useEffect( () =>{
        (async function loadPosition(){
            const result = requestMultiple(
                [
                    PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
                    PERMISSIONS.ANDROID.ACCESS_BACKGROUND_LOCATION,

                ]
            ).then(
                
            )
        } )
    } )
}

import React, {useState} from 'react';
import MapView from 'react-native-maps';
import useLocation from '../hooks/useLocation' 

//-20.514650697262077, -47.40079823374542
export default function Main({ navigation }){
const [ latitude, setLatitude ] = useState(-20.514650697262077)
const [ longitude, setLongitude ] = useState(-47.40079823374542)

const { coords, errorMsg } = useLocation();


return(
    <MapView 
        showsUserLocation={true}
        showsMyLocationButton={false}
        toolbarEnabled={false}

        style={{
            height: '100%',
            width: '100%',
            position: 'absolute'
        }}
        initialRegion={{
            latitude,
            longitude,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
            ...coords
        }}
    
    />
)

}
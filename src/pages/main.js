import React, {useState, useEffect} from 'react';
import {PermissionsAndroid, Platform} from 'react-native';
import {requestMultiple, PERMISSIONS} from 'react-native-permissions';
import MapView, {Marker} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import {useNavigation} from '@react-navigation/native';

export default function Main() {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);

  const navigation = useNavigation();

  useEffect(() => {
    if (Platform.Version < 29) {
      if (PermissionsAndroid.RESULTS.GRANTED) {
        getLocation();
      } else {
        alert('Não é possível obter a localização');
      }
    } else {
      requestLocationPermission();
    }
  }, []);

  const requestLocationPermission = async () => {
    try {
      const granted = await requestMultiple([
        PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
        PERMISSIONS.ANDROID.ACCESS_COARSE_LOCATION,
      ]);
      if (
        granted[PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION] === 'granted' &&
        granted[PERMISSIONS.ANDROID.ACCESS_COARSE_LOCATION] === 'granted'
      ) {
        getLocation();
      } else {
        alert('Permissão de localização negada');
        navigation.goBack();
      }
    } catch (err) {
      alert('Erro ao obter permissão de localização');
    }
  };

  const getLocation = () => {
    Geolocation.getCurrentPosition(
      ({coords}) => {
        setLatitude(coords.latitude);
        setLongitude(coords.longitude);
      },
      error => {
        alert('Não foi possível obter a localização');
      },
      {
        enableHighAccuracy: true,
        timeout: 20000,
        maximumAge: 1000,
        showLocationDialog: true,
      },
    );
  };

  return (
    <MapView
      style={{
        flex: 1,
      }}
      region={{
        latitude: latitude || 0,
        longitude: longitude || 0,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      }}>
      <Marker
        coordinate={{
          latitude: latitude || 0,
          longitude: longitude || 0,
        }}
        title="Minha localização"
        description="Estou aqui"
      />
    </MapView>
  );
}

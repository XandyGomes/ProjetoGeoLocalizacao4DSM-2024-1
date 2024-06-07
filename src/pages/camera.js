import React, {useState} from 'react';
import {
  Platform,
  PermissionsAndroid,
} from 'react-native';

import {
  launchCamera, 
  launchImageLibrary,   
} from 'react-native-image-picker';

const Camera = () => {
  const [filePath, setFilePath] = useState({});

  const requestCameraPermission = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.CAMERA,
          {
            title: 'Permissão da Câmera',
            message: 'O aplicativo precisa de permissão para acessar a câmera',
          },
        );
        return granted === PermissionsAndroid.RESULTS.GRANTED;
      } catch (err) {
        console.warn(err);
        return false;
      }
    } else return false;
  };

  const requestExternalWritePermission = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
          {
            title: 'Permissão de Escrita em Armazenamento Externo',
            message:
              'O aplicativo precisa de permissão para escrever em armazenamento externo',
          },
        );
        return granted === PermissionsAndroid.RESULTS.GRANTED;
      } catch (err) {
        console.warn(err);
        alert('Erro de permissão de escrita', err);
      }
      return false;
    } else return false;
  };

  const captureImage = async type => {
    let options = {
      mediaType: type,
      maxWidth: 300, 
      maxHeight: 550, 
      quality: 1, 
      videoQuality: 'low', 
      durationLimit: 30, 
      saveToPhotos: true, 
    };
  }
};

export default Camera;

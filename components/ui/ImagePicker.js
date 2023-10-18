import {
  PermissionStatus,
  launchCameraAsync,
  useCameraPermissions
} from 'expo-image-picker';
import { useState } from 'react';
import { Alert, Button, Image, StyleSheet, Text, View } from 'react-native';
import { Colors } from '../../constants/colors';

function ImagePicker() {
  const [image, setImage] = useState(null);
  const [cameraPermissionInformation, requestPermission] =
    useCameraPermissions();

  async function verifyPermissions() {
    if (cameraPermissionInformation.status === PermissionStatus.UNDETERMINED) {
      const response = await requestPermission();
      return response.granted;
    }

    if (cameraPermissionInformation.status === PermissionStatus.DENIED) {
      Alert.alert(
        'Insufficient permissions!',
        'You need to grant camera permissions to use this app.',
        [{ text: 'Okay' }]
      );
      return false;
    }

    return true;
  }
  async function takeImageHandler() {
    const hasPermission = await verifyPermissions();

    if (!hasPermission) return;

    const image = await launchCameraAsync({
      allowsEditing: true,
      aspect: [16, 9],
      quality: 0.5
    });

    setImage(image.assets[0].uri);
  }

  return (
    <View>
      <View style={styles.imagePreview}>
        {image ? (
          <Image style={styles.image} source={{ uri: image }} />
        ) : (
          <Text>No image yet.</Text>
        )}
      </View>
      <Button title="Take Image" onPress={takeImageHandler} />
    </View>
  );
}

const styles = StyleSheet.create({
  imagePreview: {
    width: '100%',
    height: 200,
    marginVertical: 8,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.primary100,
    borderRadius: 4
  },
  image: {
    width: '100%',
    height: '100%'
  }
});

export default ImagePicker;

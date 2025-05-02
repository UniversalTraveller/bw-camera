import { StyleSheet, View } from 'react-native'
import { Camera, useCameraDevice, useCameraPermission } from 'react-native-vision-camera'

export default function App() {
  const { hasPermission, requestPermission } = useCameraPermission()

  if (!hasPermission) {
    requestPermission()
  }

  const cameraDevice = useCameraDevice('back')

  if (cameraDevice === undefined) {
    return
  }

  return (
    <View style={styles.cameraContainer}>
      <Camera style={styles.camera} device={cameraDevice} isActive={true} />
    </View>
  )
}

const styles = StyleSheet.create({
  cameraContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black'
  },
  camera: {
    width: '100%',
    aspectRatio: 3 / 4
  }
})

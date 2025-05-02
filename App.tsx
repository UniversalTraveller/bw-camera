import { StyleSheet } from 'react-native'
import { Camera, useCameraDevice, useCameraPermission } from 'react-native-vision-camera'

export default function App() {
  const { hasPermission, requestPermission } = useCameraPermission()

  if (!hasPermission) {
    requestPermission()
  }

  const camera = useCameraDevice('back')

  if (camera === undefined) {
    return
  }

  return <Camera style={StyleSheet.absoluteFill} device={camera} isActive={true} />
}

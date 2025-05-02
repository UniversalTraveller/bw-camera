import { IconButton } from 'react-native-paper'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Camera, useCameraDevice, useCameraPermission } from 'react-native-vision-camera'

const CameraScreen = () => {
  const { hasPermission, requestPermission } = useCameraPermission()

  if (!hasPermission) {
    requestPermission()
  }

  const cameraDevice = useCameraDevice('back')

  if (cameraDevice === undefined) {
    return
  }

  return (
    <SafeAreaView
      style={{
        backgroundColor: 'black',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <Camera
        style={{ flex: 1, width: '100%', backgroundColor: 'red' }}
        device={cameraDevice}
        isActive={true}
        resizeMode="contain"
      />
      <IconButton
        icon="camera"
        size={48}
        onPress={() => {
          console.log('pressed')
        }}
        mode="contained-tonal"
        style={{ marginBottom: 60 }}
      />
    </SafeAreaView>
  )
}

export default CameraScreen

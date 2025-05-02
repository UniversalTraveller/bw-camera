import { useRef } from 'react'

import { SafeAreaView } from 'react-native-safe-area-context'
import { Camera, useCameraDevice, useCameraPermission, PhotoFile } from 'react-native-vision-camera'
import * as MediaLibrary from 'expo-media-library'

import ShutterButton from './ShutterButton'

const CameraScreen = () => {
  const { hasPermission: hasCameraPermission, requestPermission: requestCameraPermission } =
    useCameraPermission()

  const [mediaLibraryPermissionResponse, requestMediaLibraryPermission] =
    MediaLibrary.usePermissions({ granularPermissions: ['photo'] })

  const camera = useRef<Camera>(null)

  if (!hasCameraPermission) {
    requestCameraPermission()
  }

  const cameraDevice = useCameraDevice('back')

  if (cameraDevice === undefined) {
    return
  }

  const onShutterPress = async () => {
    const photo = await camera.current?.takePhoto()

    if (!photo) {
      return
    }

    if (mediaLibraryPermissionResponse?.status !== 'granted') {
      await requestMediaLibraryPermission()
    }

    if (mediaLibraryPermissionResponse?.status === 'granted') {
      await MediaLibrary.saveToLibraryAsync(photo.path)
    }
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
        ref={camera}
        style={{ flex: 1, width: '100%', backgroundColor: 'red' }}
        device={cameraDevice}
        isActive={true}
        resizeMode="contain"
        photo={true}
      />
      <ShutterButton onShutterPress={onShutterPress} />
    </SafeAreaView>
  )
}

export default CameraScreen

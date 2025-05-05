import { useRef, useState } from 'react'

import { View } from 'react-native'

import { SafeAreaView } from 'react-native-safe-area-context'
import { Camera, useCameraDevice, useCameraPermission } from 'react-native-vision-camera'
import * as MediaLibrary from 'expo-media-library'
import { useAppState } from '@react-native-community/hooks'

import ShutterButton from './ShutterButton'

const CameraScreen = () => {
  const [showMirrorOverlay, setShowMirrorOverlay] = useState(false)

  const appState = useAppState()

  const isActive = appState === 'active'

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
    setShowMirrorOverlay(true)

    const photo = await camera.current?.takePhoto()

    setShowMirrorOverlay(false)

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
      <View style={{ flex: 1, width: '100%' }}>
        <Camera
          ref={camera}
          style={{ flex: 1 }}
          device={cameraDevice}
          isActive={isActive}
          resizeMode="contain"
          photo={true}
        />

        {showMirrorOverlay && (
          <View
            style={{
              position: 'absolute',
              left: 0,
              right: 0,
              top: 0,
              bottom: 0,
              backgroundColor: 'black',
              zIndex: 10
            }}
            pointerEvents="none"
          />
        )}
      </View>
      <ShutterButton onShutterPress={onShutterPress} />
    </SafeAreaView>
  )
}

export default CameraScreen

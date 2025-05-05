import { useState } from 'react'

import { IconButton } from 'react-native-paper'

const ShutterButton = ({ onShutterPress }: { onShutterPress: () => Promise<void> }) => {
  const [isPressed, setIsPressed] = useState(false)

  const onPress = async () => {
    setIsPressed(true)

    await onShutterPress()

    setIsPressed(false)
  }

  return (
    <IconButton
      icon="camera"
      size={48}
      onPress={onPress}
      mode="contained-tonal"
      style={{ marginBottom: 60 }}
      selected={isPressed}
    />
  )
}

export default ShutterButton

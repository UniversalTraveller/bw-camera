import { IconButton } from 'react-native-paper'

const ShutterButton = ({
  onShutterPress,
  isPressed
}: {
  onShutterPress: () => Promise<void>
  isPressed: boolean
}) => {
  const onPress = async () => {
    await onShutterPress()
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

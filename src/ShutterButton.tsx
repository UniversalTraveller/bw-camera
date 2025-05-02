import { IconButton } from 'react-native-paper'

const ShutterButton = ({ onShutterPress }: { onShutterPress: () => void }) => {
  return (
    <IconButton
      icon="camera"
      size={48}
      onPress={onShutterPress}
      mode="contained-tonal"
      style={{ marginBottom: 60 }}
    />
  )
}

export default ShutterButton

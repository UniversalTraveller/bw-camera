import { IconButton } from 'react-native-paper'

const NavigationButton = ({ onPress, icon }: { onPress: () => void; icon: string }) => {
  return <IconButton icon={icon} size={32} onPress={onPress} />
}

export default NavigationButton

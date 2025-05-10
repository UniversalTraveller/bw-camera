import { IconButton } from 'react-native-paper'

const NavigationButton = ({
  onPress,

  icon
}: {
  onPress: () => void

  icon: string
}) => {
  return <IconButton icon={icon} size={48} onPress={onPress} />
}

export default NavigationButton

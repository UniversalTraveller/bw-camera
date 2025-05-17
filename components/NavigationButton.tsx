import { useEffect, useState } from 'react'

import { IconButton } from 'react-native-paper'

import { useIsFocused } from '@react-navigation/native'

const NavigationButton = ({ onPress, icon }: { onPress: () => void; icon: string }) => {
  const [isNavigating, setIsNavigating] = useState(false)
  const isFocused = useIsFocused()

  useEffect(() => {
    if (isFocused) {
      setIsNavigating(false)
    }
  }, [isFocused])

  const handlePress = () => {
    if (isNavigating) return
    setIsNavigating(true)
    onPress()
  }

  return <IconButton icon={icon} size={32} onPress={handlePress} disabled={isNavigating} />
}

export default NavigationButton

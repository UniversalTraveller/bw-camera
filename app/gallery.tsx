import { useEffect, useState } from 'react'

import { View, FlatList, Image, Dimensions } from 'react-native'

import * as MediaLibrary from 'expo-media-library'

import { useAppTheme } from '../theme/appTheme'
import ScreenView from '../components/ScreenView'
import { ActivityIndicator } from 'react-native-paper'

const { width } = Dimensions.get('window')
const NUMBER_OF_COLUMNS = 3
const tileSize = width / NUMBER_OF_COLUMNS

const GalleryScreen = () => {
  const [photos, setPhotos] = useState<MediaLibrary.Asset[]>([])
  const [hasNextPage, setHasNextPage] = useState(true)
  const [endCursor, setEndCursor] = useState<string>()
  const [isLoading, setIsLoading] = useState(false)
  const { colors } = useAppTheme()

  const loadPhotos = async () => {
    if (isLoading || !hasNextPage) return

    setIsLoading(true)

    try {
      const {
        assets,
        endCursor: newEndCursor,
        hasNextPage: newHasNextPage
      } = await MediaLibrary.getAssetsAsync({
        first: 20,
        after: endCursor,
        mediaType: ['photo'],
        sortBy: ['creationTime']
      })

      setPhotos(prev => [...prev, ...assets])
      setEndCursor(newEndCursor)
      setHasNextPage(newHasNextPage)
    } catch (error) {
      console.error('Error loading photos:', error)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    loadPhotos()
  }, [])

  const renderItem = ({ item }: { item: MediaLibrary.Asset }) => (
    <Image
      source={{ uri: item.uri }}
      style={{
        width: tileSize,
        height: tileSize,
        backgroundColor: colors.surface
      }}
    />
  )

  return (
    <ScreenView>
      <FlatList
        data={photos}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        numColumns={NUMBER_OF_COLUMNS}
        onEndReached={loadPhotos}
        onEndReachedThreshold={0.5}
        ListFooterComponent={
          isLoading ? (
            <View style={{ padding: 20, alignItems: 'center' }}>
              <ActivityIndicator />
            </View>
          ) : null
        }
      />
    </ScreenView>
  )
}

export default GalleryScreen

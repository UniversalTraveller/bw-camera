import { useEffect, useState } from 'react'

import { Dimensions, FlatList, Image, View } from 'react-native'

import * as MediaLibrary from 'expo-media-library'
import { ActivityIndicator, Text } from 'react-native-paper'

import ScreenView from '../components/ScreenView'
import useMediaLibraryPermissions from '../hooks/useMediaLibraryPermissions'

const { width } = Dimensions.get('window')
const NUMBER_OF_COLUMNS = 3
const tileSize = width / NUMBER_OF_COLUMNS

const GalleryScreen = () => {
  const [photos, setPhotos] = useState<MediaLibrary.Asset[]>([])
  const [hasNextPage, setHasNextPage] = useState(true)
  const [endCursor, setEndCursor] = useState<string>()
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsErros] = useState(false)

  const [mediaLibraryPermissionResponse, requestMediaLibraryPermission] =
    useMediaLibraryPermissions()

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
      setIsErros(true)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    if (mediaLibraryPermissionResponse?.status !== 'granted') {
      requestMediaLibraryPermission()
    }

    loadPhotos()
  }, [])

  const renderItem = ({ item }: { item: MediaLibrary.Asset }) => (
    <Image
      source={{ uri: item.uri }}
      style={{
        width: tileSize,
        height: tileSize
      }}
    />
  )

  if (isError) {
    return (
      <ScreenView style={{ alignItems: 'center', justifyContent: 'center', height: '100%' }}>
        <Text variant={'titleLarge'}>Error loading photos</Text>
      </ScreenView>
    )
  }

  if (photos.length === 0) {
    return (
      <ScreenView style={{ alignItems: 'center', justifyContent: 'center', height: '100%' }}>
        {isLoading ? (
          <ActivityIndicator />
        ) : (
          <Text variant={'titleLarge'}>Nothing there to display yet</Text>
        )}
      </ScreenView>
    )
  }

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

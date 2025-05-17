import * as MediaLibrary from 'expo-media-library'

const useMediaLibraryPermissions = () =>
  MediaLibrary.usePermissions({ granularPermissions: ['photo'] })

export default useMediaLibraryPermissions

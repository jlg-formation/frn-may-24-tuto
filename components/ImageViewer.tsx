import { Image, ImageURISource, StyleSheet } from "react-native";

interface ImageViewerPropType {
  placeholderImageSource: ImageURISource;
  selectedImage: string | null;
}

export default function ImageViewer({
  placeholderImageSource,
  selectedImage,
}: ImageViewerPropType) {
  const imageSource = selectedImage
    ? { uri: selectedImage }
    : placeholderImageSource;

  return <Image source={imageSource} style={styles.image} />;
}

const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
});

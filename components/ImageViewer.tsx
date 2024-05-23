import { StyleSheet, Image, ImageSourcePropType } from "react-native";

interface ImageViewerPropType {
  placeholderImageSource: ImageSourcePropType;
}

export default function ImageViewer({
  placeholderImageSource,
}: ImageViewerPropType) {
  return <Image source={placeholderImageSource} style={styles.image} />;
}

const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
});
